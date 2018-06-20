using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using PowerHub.Core.Api.Middlewares;
using PowerHub.Core.Api.Validation;
using PowerHub.Core.Bll.Services;
using PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities;
using PowerHub.Core.Dal.Repositories;

namespace PowerHub.Core.Api
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment environment)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(environment.ContentRootPath)
                .AddJsonFile("appsettings.json");

            Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOptions();
            services.AddAutoMapper();

            //adding custom dependencies
            RegisterCustomDependencies(services);

            //ReturnHttpNotAcceptable forces the reesponse to match exactly the supported content type.
            services.AddMvc(config => {
                config.ReturnHttpNotAcceptable = true;
                config.OutputFormatters.Add(new XmlSerializerOutputFormatter());//this will allow us to return xml as response
                config.InputFormatters.Add(new XmlDataContractSerializerInputFormatter());//this will allow us to accept xml in the request
                config.Filters.Add(typeof(ValidateModelFilter));
                });
            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug(LogLevel.Error);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler(errorApp =>
                {
                    errorApp.Run(async context =>
                    {
                        context.Response.StatusCode = 500;
                        context.Response.ContentType = "text/plain";
                        var errorFeature = context.Features.Get<IExceptionHandlerFeature>();
                        if (errorFeature != null)
                        {
                            var logger = loggerFactory.CreateLogger("Global Exception Logger");
                            logger.LogError(500, errorFeature.Error, errorFeature.Error.Message);
                        }
                        await context.Response.WriteAsync("There was an Error");
                    });
                });
            }

            app.UseCors(q => q
                .WithExposedHeaders("X-Pagination")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin()
                .AllowCredentials()
                .Build());

            app.UseMvc();

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UsePowerHubMiddleware();
        }

        private void RegisterCustomDependencies(IServiceCollection services)
        {
            services.AddDbContext<PH_TrainingContext>(options => options.UseSqlServer(Configuration.GetConnectionString("PH_Training")));
            services.AddScoped(typeof(IClientRepository<>), typeof(ClientRepository<>));
            services.AddTransient<ITaskService, TaskService>();
        }
    }
}

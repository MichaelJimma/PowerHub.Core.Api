using Microsoft.AspNetCore.Http;
using System.Diagnostics;
using System.Threading.Tasks;

namespace PowerHub.Core.Api.Middlewares
{
    public class PowerHubMiddleware
    {
        private readonly RequestDelegate _next;
        public PowerHubMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            //here we get the http request, do something with it and invoke the next middleware in the pipeline
            Debug.WriteLine($"---> Request Asked for {httpContext.Request.Path}");

            await _next.Invoke(httpContext);
        }
            
    }
}

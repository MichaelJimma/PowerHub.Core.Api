using Microsoft.AspNetCore.Builder;

namespace PowerHub.Core.Api.Middlewares
{
    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UsePowerHubMiddleware(this IApplicationBuilder builder)
        {
            // here we extend application builder class to add powerhub middleware in the pipe
            return builder.UseMiddleware<PowerHubMiddleware>();
        }
    }
}

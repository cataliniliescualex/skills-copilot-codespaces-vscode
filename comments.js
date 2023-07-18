// Create web server
// 
// 2016-01-12    PV
// 2021-09-26    PV      VS2022; Net6

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace WebApplication1
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.  
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940  
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.  
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940  
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.Use(async (context, next) =>
            {
                await context.Response.WriteAsync("Hello from 1st delegate.");
                await next.Invoke();
            });

            app.Run(async context =>
            {
                await context.Response.WriteAsync("Hello from 2nd delegate.");
            });
        }
    }
}

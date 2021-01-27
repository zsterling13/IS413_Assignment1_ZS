using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IS413_Assignment1_ZS
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // Determines what kind of error to return
            if (env.IsEnvironment("Development"))
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {

            }
            
            //Enables the use of node modules
            app.UseNodeModules();
            
            //Enables the use of the controller and static files, such as html
            app.UseStaticFiles();
            app.UseRouting();

            //Sets the default controller for the app
            app.UseEndpoints(cfg =>
            {
                cfg.MapControllerRoute("Default",
                    "{controller}/{action}/{id?}",
                    new { controller = "Home", action = "Index" });
            }
            );
        }
    }
}

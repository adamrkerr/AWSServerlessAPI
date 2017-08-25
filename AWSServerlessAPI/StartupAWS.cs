using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using AWSServerlessAPI.Configuration.DI;

namespace AWSServerlessAPI
{
    public class StartupAWS : StartupBase
    {
        public StartupAWS(IHostingEnvironment env) : base(env) { }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddAWSConfiguration(Configuration);
        }

        public override void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseCors(builder => {
                var url = Environment.GetEnvironmentVariable("FrontEndUrl");

                builder
                .WithOrigins(url, url.Replace("http://", "https://")) // <----- HACKY
                .WithMethods("*")
                .WithHeaders("*"); 
            } );

            base.Configure(app, env, loggerFactory);
        }
    }
}

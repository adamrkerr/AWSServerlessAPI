using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using AWSServerlessAPI.DAL.DI;
using AWSServerlessAPI.AutoMapper;
using AutoMapper;
using Microsoft.AspNetCore.Diagnostics;
using AWSServerlessAPI.Configuration.DI;

namespace AWSServerlessAPI
{
    public class StartupLocal : StartupBase
    {
        public StartupLocal(IHostingEnvironment env) : base(env) { }
        
        // This method gets called by the runtime. Use this method to add services to the container
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);

            services.AddLocalConfiguration(Configuration);
        }

        public override void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseCors(builder => builder.WithOrigins("http://localhost:4200")
            .WithMethods("*")
            .WithHeaders("*"));

            base.Configure(app, env, loggerFactory);
        }
    }
}

using AWSServerlessAPI.Configuration.Abstractions;
using AWSServerlessAPI.Configuration.Models;
using AWSServerlessAPI.Configuration.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace AWSServerlessAPI.Configuration.DI
{
    public static class ConfigurationExtension
    {
        public static void AddAWSConfiguration(this IServiceCollection services, IConfigurationRoot configuration)
        {
            services.AddTransient<IConfigurationRepository, AWSConfiguration>();
            services.AddOptions();
            services.Configure<LocalOptions>(options => configuration.GetSection("Local").Bind(options));
        }

        public static void AddLocalConfiguration(this IServiceCollection services, IConfigurationRoot configuration)
        {
            services.AddTransient<IConfigurationRepository, LocalConfiguration>();
            services.AddOptions();
            services.Configure<LocalOptions>(options => configuration.GetSection("Local").Bind(options));
        }
    }
}

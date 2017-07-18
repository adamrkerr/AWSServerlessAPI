using AWSServerlessAPI.Configuration.Abstractions;
using AWSServerlessAPI.Configuration.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace AWSServerlessAPI.Configuration.DI
{
    public static class ConfigurationExtension
    {
        public static void AddAWSConfiguration(IServiceCollection services)
        {
            services.AddTransient<IConfigurationRepository, AWSConfiguration>();
        }

        public static void AddLocalConfiguration(IServiceCollection services)
        {
            services.AddTransient<IConfigurationRepository, LocalConfiguration>();
        }
    }
}

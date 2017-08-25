using AWSServerlessAPI.Configuration.Abstractions;
using AWSServerlessAPI.Configuration.Models;
using Microsoft.Extensions.Options;
using System;

namespace AWSServerlessAPI.Configuration.Repositories
{


    class AWSConfiguration : IConfigurationRepository
    {
        LocalOptions _options;
        public AWSConfiguration(IOptions<LocalOptions> options)
        {
            _options = options.Value;
        }

        public string DynamoTableName { get => Environment.GetEnvironmentVariable("AppDynamoTable"); }
        
        public string EnvironmentName { get => _options.EnvironmentName; }
    }
}

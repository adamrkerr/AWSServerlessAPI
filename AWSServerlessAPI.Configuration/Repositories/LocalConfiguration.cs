using AWSServerlessAPI.Configuration.Abstractions;
using AWSServerlessAPI.Configuration.Models;
using Microsoft.Extensions.Options;

namespace AWSServerlessAPI.Configuration.Repositories
{
    class LocalConfiguration : IConfigurationRepository
    {
        LocalOptions _options;
        public LocalConfiguration(IOptions<LocalOptions> options)
        {
            _options = options.Value;
        }
        public string DynamoTableName { get => _options.AppDynamoTable; }

        public string EnvironmentName { get => _options.EnvironmentName; }
    }
}

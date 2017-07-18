using AWSServerlessAPI.Configuration.Abstractions;
using System;
using System.Collections.Generic;
using System.Text;

namespace AWSServerlessAPI.Configuration.Repositories
{
    class AWSConfiguration : IConfigurationRepository
    {
        public string DynamoTableName { get => Environment.GetEnvironmentVariable("AppDynamoTable"); }
    }
}

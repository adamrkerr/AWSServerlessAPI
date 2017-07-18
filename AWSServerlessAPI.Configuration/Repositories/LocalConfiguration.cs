using AWSServerlessAPI.Configuration.Abstractions;
using System;
using System.Collections.Generic;
using System.Text;

namespace AWSServerlessAPI.Configuration.Repositories
{
    class LocalConfiguration : IConfigurationRepository
    {
        public string DynamoTableName { get => throw new NotImplementedException(); }
    }
}

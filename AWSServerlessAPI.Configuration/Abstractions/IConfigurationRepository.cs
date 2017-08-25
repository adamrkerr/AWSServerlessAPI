using System;
using System.Collections.Generic;
using System.Text;

namespace AWSServerlessAPI.Configuration.Abstractions
{
    public interface IConfigurationRepository
    {
        string DynamoTableName { get; }

        string EnvironmentName { get; }
    }
}

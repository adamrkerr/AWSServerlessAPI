using System;
using System.Collections.Generic;
using System.Text;

namespace AWSServerlessAPI.Configuration.Models
{
    class LocalOptions
    {
        public string AppDynamoTable { get; set; }

        public string EnvironmentName { get; set; }
    }
}

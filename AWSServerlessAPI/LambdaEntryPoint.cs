using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using AWSServerlessAPI.Configuration.DI;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

namespace AWSServerlessAPI
{
    /// <summary>
    /// This class extends from APIGatewayProxyFunction which contains the method FunctionHandlerAsync which is the 
    /// actual Lambda function entry point. The Lambda handler field should be set to
    /// 
    /// AWSServerlessAPI::AWSServerlessAPI.LambdaEntryPoint::FunctionHandlerAsync
    /// </summary>
    public class LambdaEntryPoint : Amazon.Lambda.AspNetCoreServer.APIGatewayProxyFunction
    {
        protected override void Init(IWebHostBuilder builder)
        {
            builder
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseStartup<Startup>()
                .ConfigureServices(ConfigurationExtension.AddAWSConfiguration)
                //.ConfigureLogging(loggerFactory => loggerFactory.AddLambdaLogger(Startup.Configuration.GetLambdaLoggerOptions()))
                .UseApiGateway();
        }
    }
}

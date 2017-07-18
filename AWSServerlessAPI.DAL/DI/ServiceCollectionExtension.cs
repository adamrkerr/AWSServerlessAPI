using AWSServerlessAPI.DAL.Abstractions;
using AWSServerlessAPI.DAL.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace AWSServerlessAPI.DAL.DI
{
    public static class ServiceCollectionExtension
    {
        public static void AddDALServices(this IServiceCollection services)
        {
            // Add Dynamo to the ASP.NET Core dependency injection framework.
            services.AddAWSService<Amazon.DynamoDBv2.IAmazonDynamoDB>();

            services.AddTransient<IItemRepository, ItemRepository>();
        }
    }
}

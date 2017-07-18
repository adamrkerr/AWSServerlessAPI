using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AWSServerlessAPI.DAL.Abstractions;
using AWSServerlessAPI.DAL.Models;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;
using System.Linq;
using AWSServerlessAPI.Configuration.Abstractions;

namespace AWSServerlessAPI.DAL.Repositories
{
    class ItemRepository : IItemRepository
    {
        private readonly IAmazonDynamoDB _dynamoClient;
        private readonly IConfigurationRepository _config;
        public ItemRepository(IAmazonDynamoDB dynamo, IConfigurationRepository config)
        {
            this._dynamoClient = dynamo;
            this._config = config;
        }

        public Task DeleteRecordByKey(string key)
        {
            throw new NotImplementedException();
        }

        public Task<ItemRecord> GetItemByKey(string key)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<ItemRecord>> GetItems()
        {
            var tableName = _config.DynamoTableName;

            var response = await _dynamoClient.ScanAsync(tableName, GetItemRecordAttributes());

            if (response.HttpStatusCode == System.Net.HttpStatusCode.OK)
                return ConvertAttributesToItems(response.Items).ToList();

            throw new Exception($"Insert failed, server returned status {response.HttpStatusCode}");
        }

        public async Task<ItemRecord> InsertItem(ItemRecord newRecord)
        {
            var attributes = ConvertToAttributeCollection(newRecord);

            var tableName = _config.DynamoTableName;

            var response = await _dynamoClient.PutItemAsync(tableName, attributes);

            if (response.HttpStatusCode == System.Net.HttpStatusCode.OK)
                return newRecord;

            throw new Exception($"Insert failed, server returned status {response.HttpStatusCode}");
        }

        public Task<ItemRecord> UpdateExistingRecord(ItemRecord record)
        {
            throw new NotImplementedException();
        }

        private static Dictionary<string, AttributeValue> ConvertToAttributeCollection(ItemRecord record)
        {
            return new Dictionary<string, AttributeValue>
            {
                {nameof(record.Id).ToLower(), new AttributeValue{ S = record.Id } },
                {nameof(record.Name).ToLower(), new AttributeValue{ S = record.Name } },
                {nameof(record.Description).ToLower(), new AttributeValue{ S = record.Description } },
                {nameof(record.CurrentInventory).ToLower(), new AttributeValue{ N = record.CurrentInventory.ToString() } }
            };
        }

        private static IEnumerable<ItemRecord> ConvertAttributesToItems(List<Dictionary<string, AttributeValue>> attributeCollection)
        {
            foreach(var dictionary in attributeCollection)
            {
                var item = new ItemRecord();

                item.Id = dictionary[nameof(item.Id).ToLower()].S;
                item.Name = dictionary[nameof(item.Name).ToLower()].S;
                item.Description = dictionary[nameof(item.Description).ToLower()].S;
                item.CurrentInventory = Int32.Parse(dictionary[nameof(item.CurrentInventory).ToLower()].N);

                yield return item;
            }
        }

        private static List<string> GetItemRecordAttributes()
        {
            var testRecord = new ItemRecord();

            return new List<string>
            {
                nameof(testRecord.Id).ToLower(),
                nameof(testRecord.Name).ToLower(),
                nameof(testRecord.Description).ToLower(),
                nameof(testRecord.CurrentInventory).ToLower()
            };
        }
    }
}

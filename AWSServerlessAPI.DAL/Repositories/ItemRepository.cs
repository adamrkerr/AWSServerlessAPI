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
        private readonly string _tableName;
        public ItemRepository(IAmazonDynamoDB dynamo, IConfigurationRepository config)
        {
            this._dynamoClient = dynamo;
            this._config = config;
            this._tableName = _config.DynamoTableName;
        }

        public async Task DeleteRecordByKey(string key)
        {
            var item = new ItemRecord();

            var response = await _dynamoClient.DeleteItemAsync(_tableName, ConstructKeyDictionary(key));

            if (response.HttpStatusCode == System.Net.HttpStatusCode.OK)
                return;

            throw new Exception($"Delete failed, server returned status {response.HttpStatusCode}");
        }

        public async Task<ItemRecord> GetRecordByKey(string key)
        {
            var item = new ItemRecord();

            var response = await _dynamoClient.GetItemAsync(_tableName, ConstructKeyDictionary(key));

            if (response.HttpStatusCode == System.Net.HttpStatusCode.OK)
                return ConvertAttributesToItems(new[] { response.Item }).First();

            throw new Exception($"Read failed, server returned status {response.HttpStatusCode}");
        }

        public async Task<IEnumerable<ItemRecord>> GetRecords()
        {
            var response = await _dynamoClient.ScanAsync(_tableName, GetItemRecordAttributes());

            if (response.HttpStatusCode == System.Net.HttpStatusCode.OK)
                return ConvertAttributesToItems(response.Items).ToList();

            throw new Exception($"Read failed, server returned status {response.HttpStatusCode}");
        }

        public async Task<ItemRecord> InsertRecord(ItemRecord newRecord)
        {
            var attributes = ConvertToAttributeCollection(newRecord);

            var request = new PutItemRequest
            {
                TableName = _tableName,
                Item = attributes,
                ConditionExpression = $"attribute_not_exists({nameof(newRecord.Id).ToLower()})" //only create new
            };

            var response = await _dynamoClient.PutItemAsync(request);

            if (response.HttpStatusCode == System.Net.HttpStatusCode.OK)
                return newRecord;

            throw new Exception($"Insert failed, server returned status {response.HttpStatusCode}");
        }

        public async Task<ItemRecord> UpdateExistingRecord(ItemRecord record)
        {
            var attributes = ConvertToAttributeCollection(record);

            var response = await _dynamoClient.UpdateItemAsync(_tableName, ConstructKeyDictionary(record.Id), ConvertToUpdateCollection(record), ReturnValue.ALL_NEW);

            if (response.HttpStatusCode == System.Net.HttpStatusCode.OK)
                return ConvertAttributesToItems(new[] { response.Attributes }).First();

            throw new Exception($"Update failed, server returned status {response.HttpStatusCode}");
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

        private static Dictionary<string, AttributeValueUpdate> ConvertToUpdateCollection(ItemRecord record)
        {
            return new Dictionary<string, AttributeValueUpdate>
            {
                {nameof(record.Name).ToLower(), new AttributeValueUpdate{ Action = AttributeAction.PUT, Value = new AttributeValue{ S = record.Name } } },
                {nameof(record.Description).ToLower(), new AttributeValueUpdate{ Action = AttributeAction.PUT, Value = new AttributeValue{  S = record.Description } } },
                {nameof(record.CurrentInventory).ToLower(), new AttributeValueUpdate{ Action = AttributeAction.PUT, Value = new AttributeValue{ N = record.CurrentInventory.ToString() } } }
            };
        }

        private static Dictionary<string, AttributeValue> ConstructKeyDictionary(string id)
        {
            var item = new ItemRecord();

            return new Dictionary<string, AttributeValue>
            {
                {nameof(item.Id).ToLower(), new AttributeValue{ S = id } }
            };
        }

        private static IEnumerable<ItemRecord> ConvertAttributesToItems(IEnumerable<Dictionary<string, AttributeValue>> attributeCollection)
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

using AutoMapper;
using AWSServerlessAPI.Configuration.Abstractions;
using AWSServerlessAPI.DAL.Abstractions;
using AWSServerlessAPI.DAL.Models;
using AWSServerlessAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AWSServerlessAPI.Controllers
{
    [Route("api/[controller]")]
    public class ItemsController : Controller
    {
        private readonly IItemRepository _repository;
        private readonly IMapper _mapper;
        private readonly IConfigurationRepository _config;

        public ItemsController(IItemRepository repository, 
            IMapper mapper, 
            IConfigurationRepository config)
        {
            _repository = repository;
            _mapper = mapper;
            _config = config;
        }

        // GET api/values
        [HttpGet]
        public async Task<IEnumerable<ItemModel>> Get()
        {            
            var results = await _repository.GetRecords();

            var mapped = _mapper.Map<IEnumerable<ItemModel>>(results);

            return mapped;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ItemModel> Get(string id)
        {
            var result = await _repository.GetRecordByKey(id);

            var mapped = _mapper.Map<ItemModel>(result);

            return mapped;
        }

        // GET api/values/5
        [HttpGet("dynamo")]
        public string GetDynamo()
        {
            return _config.DynamoTableName;
        }

        // POST api/values
        [HttpPost]
        public async Task<ItemModel> Post([FromBody]ItemModel newRecord)
        {
            var mappedRecord = Mapper.Map<ItemRecord>(newRecord);

            var result = await _repository.InsertRecord(mappedRecord);

            return Mapper.Map<ItemModel>(result);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<ItemModel> Put(string id, [FromBody]ItemModel newRecord)
        {
            if(id != newRecord.Id)
            {
                throw new Exception("Route ID does not match payload ID");
            }

            var mappedRecord = Mapper.Map<ItemRecord>(newRecord);

            var result = await _repository.UpdateExistingRecord(mappedRecord);

            return Mapper.Map<ItemModel>(result);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task Delete(string id)
        {            
            await _repository.DeleteRecordByKey(id);

            return;
        }
    }
}

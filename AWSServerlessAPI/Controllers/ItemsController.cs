using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AWSServerlessAPI.DAL.Abstractions;
//using AutoMapper;
using AWSServerlessAPI.Configuration.Abstractions;
using AWSServerlessAPI.Models;
using AWSServerlessAPI.DAL.Models;
using AutoMapper;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

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
            var results = await _repository.GetItems();

            var mapped = _mapper.Map<IEnumerable<ItemModel>>(results);

            return mapped;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
            Console.WriteLine(JsonConvert.SerializeObject(newRecord));
            
            var mappedRecord = Mapper.Map<ItemRecord>(newRecord);

            var result = await _repository.InsertItem(mappedRecord);

            return Mapper.Map<ItemModel>(result);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

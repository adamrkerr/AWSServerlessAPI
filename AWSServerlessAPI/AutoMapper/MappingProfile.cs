using AutoMapper;
using AWSServerlessAPI.DAL.Models;
using AWSServerlessAPI.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AWSServerlessAPI.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ItemModel, ItemRecord>().ReverseMap();
        }
    }
}

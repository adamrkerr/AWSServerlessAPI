﻿using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace AWSServerlessAPI.Models
{
    [DataContract]
    public class ItemModel
    {

        [DataMember(Name="id")]
        public string Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int CurrentInventory { get; set; }
    }
}

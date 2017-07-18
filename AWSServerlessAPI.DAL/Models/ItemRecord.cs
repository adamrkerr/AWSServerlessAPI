using System;
using System.Collections.Generic;
using System.Text;

namespace AWSServerlessAPI.DAL.Models
{
    public class ItemRecord
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int CurrentInventory { get; set; }
    }
}

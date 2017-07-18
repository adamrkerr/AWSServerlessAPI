using AWSServerlessAPI.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AWSServerlessAPI.DAL.Abstractions
{
    public interface IItemRepository
    {
        Task<IEnumerable<ItemRecord>> GetItems();

        Task<ItemRecord> GetItemByKey(string key);

        Task<ItemRecord> InsertItem(ItemRecord newRecord);

        Task<ItemRecord> UpdateExistingRecord(ItemRecord record);

        Task DeleteRecordByKey(string key);
    }
}

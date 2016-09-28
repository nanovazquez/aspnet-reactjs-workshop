using System.Collections.Generic;

namespace ReactMessenger.Repositories
{
    interface IRepository<T>
    {
        IEnumerable<T> GetAll();
        T Insert(T item);
    }
}

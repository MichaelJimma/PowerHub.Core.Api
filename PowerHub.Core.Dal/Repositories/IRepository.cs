using Microsoft.EntityFrameworkCore;
using PowerHub.Core.Utils.EntityTypes;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace PowerHub.Core.Dal.Repositories
{
    public interface IRepository<T, D> 
        where T : class, IEntity
        where D : DbContext
    {
        IQueryable<T> GetAll();
        Task<T> GetSingle(Guid id);
        Task<bool> Add(T entity);
        Task<bool> Delete(T entity);
        Task<bool> Update(T entity);
        Task<bool> Save();
        int Count();
    }
}

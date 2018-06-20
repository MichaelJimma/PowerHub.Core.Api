using PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities;
using PowerHub.Core.Utils.EntityTypes;

namespace PowerHub.Core.Dal.Repositories
{
    public interface IClientRepository<T> : IRepository<T, PH_TrainingContext>
        where T : class, IEntity
    { }
}

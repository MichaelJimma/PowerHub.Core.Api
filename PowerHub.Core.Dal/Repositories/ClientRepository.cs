using PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities;
using PowerHub.Core.Utils.EntityTypes;

namespace PowerHub.Core.Dal.Repositories
{
    public class ClientRepository<T> : Repository<T, PH_TrainingContext>, IClientRepository<T>
        where T : class, IEntity
    {
        public ClientRepository(PH_TrainingContext ctx)
            : base(ctx) { }
    }
}

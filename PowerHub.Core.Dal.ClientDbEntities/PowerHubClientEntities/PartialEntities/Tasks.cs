using PowerHub.Core.Utils.EntityTypes;
using System;

namespace PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities
{
    public partial class Tasks : IEntity
    {
        public Guid Id
        {
            get
            {
                return Taskid;
            }
        }

        public void SetNewId()
        {
            this.Taskid = Guid.NewGuid();
        }
    }
}

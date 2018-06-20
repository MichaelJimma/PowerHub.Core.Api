using PowerHub.Core.Utils.EntityTypes;
using System;

namespace PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities
{
    public partial class PerformanceDataHalfHourly : IEntity
    {
        public Guid Id
        {
            get
            {
                return Performancedatahalfhourlyid;
            }
        }
        public void SetNewId()
        {
            this.Performancedatahalfhourlyid = Guid.NewGuid();
        }
    }
}

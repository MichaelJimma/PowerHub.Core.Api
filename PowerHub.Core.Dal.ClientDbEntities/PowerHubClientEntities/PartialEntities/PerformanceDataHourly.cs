using PowerHub.Core.Utils.EntityTypes;
using System;

namespace PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities
{
    public partial class PerformanceDataHourly : IEntity
    {
        public Guid Id
        {
            get
            {
                return Performancedatahourlyid;
            }
        }
        public void SetNewId()
        {
            this.Performancedatahourlyid = Guid.NewGuid();
        }
    }
}

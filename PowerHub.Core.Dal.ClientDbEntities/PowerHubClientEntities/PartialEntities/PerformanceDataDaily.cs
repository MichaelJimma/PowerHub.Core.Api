using PowerHub.Core.Utils.EntityTypes;
using System;

namespace PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities
{
    public partial class PerformanceDataDaily : IEntity
    {
        public Guid Id
        {
            get
            {
                return Performancedatadailyid;
            }
        }
        public void SetNewId()
        {
            this.Performancedatadailyid = Guid.NewGuid();
        }
    }
}

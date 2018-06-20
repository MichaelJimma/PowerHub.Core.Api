using System;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class ProjectPortfolio
    {
        public Guid Projectportfolioid { get; set; }
        public Guid Projectid { get; set; }
        public Guid Portfolioid { get; set; }
        public Guid Organizationid { get; set; }

        public Projects Portfolio { get; set; }
        public Projects Project { get; set; }
    }
}

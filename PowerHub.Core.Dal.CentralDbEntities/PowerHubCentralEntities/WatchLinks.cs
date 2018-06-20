using System;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class WatchLinks
    {
        public Guid Watchlinkid { get; set; }
        public Guid Organizationid { get; set; }
        public Guid Userid { get; set; }
        public Guid Watchedobjectid { get; set; }
        public DateTime Datetimecreated { get; set; }
        public Guid Createdby { get; set; }
        public DateTime Datetimemodified { get; set; }
        public Guid Modifiedby { get; set; }

        public Organizations Organization { get; set; }
        public Users User { get; set; }
    }
}

using System;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class DashboardConfigurations
    {
        public Guid Dashboardconfigurationsid { get; set; }
        public Guid Organizationid { get; set; }
        public Guid Containerid { get; set; }
        public Guid Createdby { get; set; }
        public DateTime Datetimecreated { get; set; }
        public Guid Modifiedby { get; set; }
        public DateTime Datetimemodified { get; set; }
        public string Layout { get; set; }
        public bool Issystemobject { get; set; }
        public string Level { get; set; }
    }
}

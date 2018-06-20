using System;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class Packages
    {
        public Guid Galleryid { get; set; }
        public Guid Packageid { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Storagekey { get; set; }
        public DateTime Datetimecreated { get; set; }
        public Guid Createdby { get; set; }
        public Guid Organizationid { get; set; }
        public string Items { get; set; }
        public Guid? Sourceorganizationid { get; set; }
        public bool Allowunpackage { get; set; }
        public string Packageschemaversion { get; set; }
    }
}

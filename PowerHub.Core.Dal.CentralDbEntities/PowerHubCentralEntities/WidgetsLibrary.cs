using System;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class WidgetsLibrary
    {
        public Guid Widgetid { get; set; }
        public Guid Organizationid { get; set; }
        public Guid Createdby { get; set; }
        public DateTime Datetimecreated { get; set; }
        public Guid Modifiedby { get; set; }
        public DateTime Datetimemodified { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Levels { get; set; }
        public string Resultsettype { get; set; }
        public string Groups { get; set; }
        public Guid? Packageid { get; set; }
        public string Thumbnail { get; set; }
        public string Configuration { get; set; }
        public bool Isprivate { get; set; }
        public bool Issystemobject { get; set; }
    }
}

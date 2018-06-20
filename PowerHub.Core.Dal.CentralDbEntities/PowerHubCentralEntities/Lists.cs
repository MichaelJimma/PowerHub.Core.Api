using System;
using System.Collections.Generic;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class Lists
    {
        public Lists()
        {
            ListItems = new HashSet<ListItems>();
        }

        public Guid Listid { get; set; }
        public Guid Organizationid { get; set; }
        public Guid Containerid { get; set; }
        public DateTime Datetimecreated { get; set; }
        public Guid Createdby { get; set; }
        public DateTime Datetimemodified { get; set; }
        public Guid Modifiedby { get; set; }
        public bool Issystemobject { get; set; }
        public bool Isprivate { get; set; }
        public bool Isactive { get; set; }
        public string Listkey { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public short? Type { get; set; }

        public Lists List { get; set; }
        public Lists InverseList { get; set; }
        public ICollection<ListItems> ListItems { get; set; }
    }
}

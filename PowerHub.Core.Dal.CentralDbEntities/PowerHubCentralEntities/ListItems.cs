using System;
using System.Collections.Generic;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class ListItems
    {
        public ListItems()
        {
            ListItemCaptions = new HashSet<ListItemCaptions>();
        }

        public Guid Listitemid { get; set; }
        public Guid Listid { get; set; }
        public DateTime Datetimecreated { get; set; }
        public Guid Createdby { get; set; }
        public DateTime Datetimemodified { get; set; }
        public Guid Modifiedby { get; set; }
        public string Itemkey { get; set; }
        public DateTime Effectivedate { get; set; }
        public DateTime Expirydate { get; set; }
        public int Ordinal { get; set; }
        public bool Issystemobject { get; set; }

        public Lists List { get; set; }
        public ICollection<ListItemCaptions> ListItemCaptions { get; set; }
    }
}

using System;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class ListItemCaptions
    {
        public Guid Listitemcaptionid { get; set; }
        public Guid Listitemid { get; set; }
        public string Language { get; set; }
        public string Caption { get; set; }

        public ListItems Listitem { get; set; }
    }
}

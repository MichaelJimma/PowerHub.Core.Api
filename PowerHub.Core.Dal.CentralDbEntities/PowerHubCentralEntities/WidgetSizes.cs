using System;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class WidgetSizes
    {
        public Guid Widgetsizeid { get; set; }
        public string Type { get; set; }
        public string Sizes { get; set; }
        public string Defaultsize { get; set; }
    }
}

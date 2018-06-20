using System;

namespace PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities
{
    public partial class Tasks
    {
        public Guid Taskid { get; set; }
        public string Key { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}

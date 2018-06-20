using System;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class UserSessions
    {
        public Guid Usersessionid { get; set; }
        public Guid Userid { get; set; }
        public DateTime Datetimecreated { get; set; }
        public DateTime Datetimemodified { get; set; }
        public bool Isexpired { get; set; }

        public Users User { get; set; }
    }
}

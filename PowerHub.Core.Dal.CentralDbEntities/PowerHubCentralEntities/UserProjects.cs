using System;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class UserProjects
    {
        public Guid Userprojectid { get; set; }
        public Guid Organizationid { get; set; }
        public Guid Userid { get; set; }
        public Guid Projectid { get; set; }
        public bool? Isassignedtomember { get; set; }
        public bool Isfavourite { get; set; }
    }
}

using System;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class OrganizationMembers
    {
        public Guid Memberid { get; set; }
        public Guid Organizationid { get; set; }
        public Guid Userid { get; set; }
        public string Permissions { get; set; }
        public string Securitytags { get; set; }
        public int Tagstoken { get; set; }
        public bool Isorgadmin { get; set; }
        public bool Ispowerhubadmin { get; set; }

        public Organizations Organization { get; set; }
        public Users User { get; set; }
    }
}

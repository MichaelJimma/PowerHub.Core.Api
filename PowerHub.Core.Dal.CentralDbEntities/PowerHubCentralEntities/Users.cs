using System;
using System.Collections.Generic;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class Users
    {
        public Users()
        {
            OrganizationMembers = new HashSet<OrganizationMembers>();
            UserSessions = new HashSet<UserSessions>();
            WatchLinks = new HashSet<WatchLinks>();
        }

        public Guid Userid { get; set; }
        public DateTime Datetimecreated { get; set; }
        public Guid Createdby { get; set; }
        public DateTime Datetimemodified { get; set; }
        public Guid Modifiedby { get; set; }
        public bool Issystemobject { get; set; }
        public bool Isprivate { get; set; }
        public bool Isactive { get; set; }
        public bool Ispowerhubadmin { get; set; }
        public string Name { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Resetpasswordhash { get; set; }
        public int Status { get; set; }
        public Guid Languagepreferenceid { get; set; }
        public string Languagepreferencekey { get; set; }

        public ICollection<OrganizationMembers> OrganizationMembers { get; set; }
        public ICollection<UserSessions> UserSessions { get; set; }
        public ICollection<WatchLinks> WatchLinks { get; set; }
    }
}

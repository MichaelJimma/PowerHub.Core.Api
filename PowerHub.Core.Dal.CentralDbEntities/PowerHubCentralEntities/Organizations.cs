using System;
using System.Collections.Generic;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class Organizations
    {
        public Organizations()
        {
            OrganizationMembers = new HashSet<OrganizationMembers>();
            Projects = new HashSet<Projects>();
            Tasks = new HashSet<Tasks>();
            WatchLinks = new HashSet<WatchLinks>();
        }

        public Guid Organizationid { get; set; }
        public DateTime Datetimecreated { get; set; }
        public Guid Createdby { get; set; }
        public DateTime Datetimemodified { get; set; }
        public Guid Modifiedby { get; set; }
        public bool Issystemobject { get; set; }
        public bool Isprivate { get; set; }
        public string Organizationkey { get; set; }
        public string Name { get; set; }
        public short Status { get; set; }
        public string Clientdatabasekey { get; set; }
        public Guid? Keycontactid { get; set; }

        public ICollection<OrganizationMembers> OrganizationMembers { get; set; }
        public ICollection<Projects> Projects { get; set; }
        public ICollection<Tasks> Tasks { get; set; }
        public ICollection<WatchLinks> WatchLinks { get; set; }
    }
}

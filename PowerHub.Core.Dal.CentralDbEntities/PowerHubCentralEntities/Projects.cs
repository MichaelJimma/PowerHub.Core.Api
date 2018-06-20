using System;
using System.Collections.Generic;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class Projects
    {
        public Projects()
        {
            ProjectPortfolioPortfolio = new HashSet<ProjectPortfolio>();
            ProjectPortfolioProject = new HashSet<ProjectPortfolio>();
        }

        public Guid Organizationid { get; set; }
        public Guid Projectid { get; set; }
        public DateTime Datetimecreated { get; set; }
        public Guid Createdby { get; set; }
        public DateTime Datetimemodified { get; set; }
        public Guid Modifiedby { get; set; }
        public bool Issystemobject { get; set; }
        public bool Isprivate { get; set; }
        public bool Isportfolio { get; set; }
        public string Name { get; set; }
        public string Projecticonkey { get; set; }
        public string Tags { get; set; }
        public bool Isworkspace { get; set; }
        public string Description { get; set; }
        public Guid? Keycontactid { get; set; }
        public double? Longitude { get; set; }
        public double? Latitude { get; set; }
        public string City { get; set; }
        public string Postalcode { get; set; }
        public string Addressline { get; set; }
        public DateTime? Startdate { get; set; }
        public Guid? Countryid { get; set; }
        public Guid? Provincestateid { get; set; }
        public string Projectkey { get; set; }

        public Organizations Organization { get; set; }
        public ICollection<ProjectPortfolio> ProjectPortfolioPortfolio { get; set; }
        public ICollection<ProjectPortfolio> ProjectPortfolioProject { get; set; }
    }
}

using System;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class EmailTemplates
    {
        public Guid Emailtemplateid { get; set; }
        public Guid Organizationid { get; set; }
        public string Emailtemplatekey { get; set; }
        public string Locale { get; set; }
        public string Templatehtml { get; set; }
    }
}

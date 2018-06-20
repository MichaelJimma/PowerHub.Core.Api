using System;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class Tasks
    {
        public Guid Taskid { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime Startdate { get; set; }
        public DateTime Enddate { get; set; }
        public Guid? Assignedto { get; set; }
        public bool Isbusinessday { get; set; }
        public int? Notificationdays { get; set; }
        public bool Isnew { get; set; }
        public bool Iscompleted { get; set; }
        public int? Duration { get; set; }
        public Guid Recurrenceid { get; set; }
        public DateTime Datetimecreated { get; set; }
        public Guid Createdby { get; set; }
        public DateTime Datetimemodified { get; set; }
        public Guid Modifiedby { get; set; }
        public Guid Organizationid { get; set; }
        public Guid Containerid { get; set; }
        public Guid? Parentid { get; set; }
        public string Taskstatuskey { get; set; }
        public string Taskprioritykey { get; set; }
        public int Tagstoken { get; set; }

        public Organizations Organization { get; set; }
    }
}

using System;

namespace PowerHub.Core.Utils.EntityTypes
{
    public interface IAuditedEntity : IEntity
    {
         DateTime Datetimecreated { get; set; }
         DateTime Datetimemodified { get; set; }
         Guid Createdby { get; set; }
         Guid Modifiedby { get; set; }
    }
}

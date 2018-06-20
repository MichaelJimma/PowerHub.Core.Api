using System;

namespace PowerHub.Core.Utils.EntityTypes
{
    public interface IEntity
    {
        Guid Id { get; }
        void SetNewId();
    }
}

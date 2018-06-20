using PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities;
using PowerHub.Core.Dal.Dto;
using PowerHub.Core.Dal.Dto.UpdateDto;
using PowerHub.Core.Dal.QueryParameters;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PowerHub.Core.Bll.Services
{
    public interface ITaskService
    {
        Task<(bool created, Tasks task)> CreateTask(TaskDto taskDto);
        Task<(bool updated, Tasks task)> UpdateTask(Guid taskId, TaskUpdateDto taskUpdateDto);
        Task<(bool deleted, Tasks task)> DeleteTask(Guid taskId);
        Task<TaskDto> GetTask(Guid taskId);
        (IEnumerable<TaskDto> tasks, int totalCount) GetAllTasks(Pagination pagination);
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities;
using PowerHub.Core.Dal.Dto;
using PowerHub.Core.Dal.QueryParameters;
using PowerHub.Core.Dal.Repositories;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using PowerHub.Core.Dal.Dto.UpdateDto;

namespace PowerHub.Core.Bll.Services
{
    public class TaskService : ITaskService
    {
        private IClientRepository<Tasks> _taskRepository;

        public TaskService(IClientRepository<Tasks> taskRepository)
        {
            _taskRepository = taskRepository;
        }
        public async Task<(bool created, Tasks task)> CreateTask(TaskDto taskDto)
        {
            var task = Mapper.Map<Tasks>(taskDto);
            if (taskDto.taskid == Guid.Empty)
                task.SetNewId();
            var result = await _taskRepository.Add(task);

            return (result, task);
        }

        public async Task<(bool updated, Tasks task)> UpdateTask(Guid taskid, TaskUpdateDto taskUpdateDto)
        {
            var existingTask = await _taskRepository.GetSingle(taskid);

            if (existingTask == null)
            {
                return (false, null);
            }
            
            Mapper.Map(taskUpdateDto, existingTask);

            var result = await _taskRepository.Update(existingTask);

            return (result, existingTask);
        }

        public async Task<(bool deleted, Tasks task)> DeleteTask(Guid taskid)
        {
            var existingTask = await _taskRepository.GetSingle(taskid);
            if (existingTask == null)
            {
                return (false, null);
            }

            var result = await _taskRepository.Delete(existingTask);

            return (result, existingTask);
        }

        public (IEnumerable<TaskDto> tasks, int totalCount) GetAllTasks(Pagination pagination)
        {
            IQueryable<Tasks> allTasks = _taskRepository.GetAll()
                .OrderBy(pagination.OrderBy, pagination.Descending);

            if (pagination.HasQuery)
            {
                allTasks = allTasks.Where(t => t.Name.Contains(pagination.Query.ToLowerInvariant()) || t.Key.Contains(pagination.Query.ToLowerInvariant()));
            }

            int totalRecords = allTasks.Count();

            var allTasksDto = allTasks
                .Skip(pagination.PageCount * (pagination.Page - 1))
                .Take(pagination.PageCount)
                .ToList()
                .Select(t => Mapper.Map<TaskDto>(t));

            return (allTasksDto, totalRecords);
        }

        public async Task<TaskDto> GetTask(Guid taskId)
        {
            var task = await _taskRepository.GetSingle(taskId);

            var taskDto = Mapper.Map<TaskDto>(task);

            return taskDto;
        }
    }
}

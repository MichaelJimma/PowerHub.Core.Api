using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using PowerHub.Core.Bll.Services;
using PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities;
using PowerHub.Core.Dal.Dto;
using PowerHub.Core.Dal.Dto.UpdateDto;
using PowerHub.Core.Dal.QueryParameters;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PowerHub.Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        private ITaskService _taskService;
        private ILogger<TasksController> _logger;

        public TasksController(
            ITaskService taskService,
            ILogger<TasksController> logger
            )
        {
            _taskService = taskService;
            _logger = logger;
        }

        // POST api/tasks
        [HttpPost]
        public async Task<IActionResult> CreateTask([FromBody] TaskDto taskDto)
        {
            if (taskDto == null)
            {
                return BadRequest("Task object was null");
            }

            var (created, task) = await _taskService.CreateTask(taskDto);

            if (!created)
            {
                return new StatusCodeResult(500);
            }

            //this returns a 201 created status with a link in the header's Location to the resource
            return CreatedAtRoute("GetSingleTask", new { taskid = task.Taskid }, Mapper.Map<TaskDto>(task));
        }

        // PUT api/tasks/{id}
        [HttpPut]
        [Route("{taskid}")]
        public async Task<IActionResult> UpdateTask(Guid taskid, [FromBody] TaskUpdateDto taskUpdateDto)
        {
            
            if (taskUpdateDto == null)
            {
                return BadRequest("Task object was null");
            }

            var (updated, task) = await _taskService.UpdateTask(taskid, taskUpdateDto);

            if (task == null)
            {
                return NotFound();
            }

            if (!updated)
            {
                return new StatusCodeResult(500);
            }

            return Ok(Mapper.Map(task,new TaskDto()));
        }

        // PATCH api/tasks/{id}
        [HttpPatch]
        [Route("{taskid}")]
        public async Task<IActionResult> PartiallyUpdateTask(Guid taskid, [FromBody] JsonPatchDocument<TaskUpdateDto> taskPatchUpdate)
        {
            if (taskPatchUpdate == null)
            {
                return BadRequest();
            }

            var existingTask = await _taskService.GetTask(taskid);
            if (existingTask == null)
            {
                return NotFound();
            }

            var taskToPatch = Mapper.Map<TaskUpdateDto>(existingTask);
            taskPatchUpdate.ApplyTo(taskToPatch, ModelState);
            TryValidateModel(taskPatchUpdate);

           var (updated, task) = await _taskService.UpdateTask(taskid, taskToPatch);

            if (!updated)
            {
                return new StatusCodeResult(500);
            }

            //return Ok(result.task);
            return Ok(Mapper.Map(task, new TaskDto()));
        }

        // DELETE api/tasks/{id}
        [HttpDelete]
        [Route("{taskid}")]
        public async Task<IActionResult> DeleteTask(Guid taskid)
        {
            var result = await _taskService.DeleteTask(taskid);

            if (result.task == null)
            {
                return NotFound();
            }

            if (!result.deleted)
            {
                return new StatusCodeResult(500);
            }

            return NoContent();
        }

        // GET api/tasks/{id}
        [HttpGet]
        [Route("{taskid}",Name = "GetSingleTask")]
        public async Task<IActionResult> GetTask(Guid taskid)
        {
            var task = await _taskService.GetTask(taskid);

            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }

        // GET api/tasks[?page=1&pagecount=20&query=july 18]
        [HttpGet]
        [ProducesResponseType(typeof(List<Tasks>), 200)]
        public IActionResult GetTasks(Pagination pagination)
        {
            var (tasks, totalCount) = _taskService.GetAllTasks(pagination);

            Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(new { totalCount }));

            return Ok(tasks);
        }
    }
}

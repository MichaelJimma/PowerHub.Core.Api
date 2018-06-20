using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PowerHub.Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        private readonly List<TaskTestDto> _tasks;

        public TestController()
        {
            _tasks = new List<TaskTestDto>
            {
                new TaskTestDto
                {
                    Id = Guid.Parse("6c9d14c0-1261-4ebd-a1fc-2fee766c5d8f"),
                    Key = "key_one",
                    Name = "Name One",
                    Description = "Description One"
                },
                new TaskTestDto
                {
                    Id = Guid.Parse("d170ec8d-d0cc-4b61-8f7f-0f9b906b4de3"),
                    Key = "key_two",
                    Name = "Name Two",
                    Description = "Description Two"
                },
                new TaskTestDto
                {
                    Id = Guid.Parse("6196b9d3-f3e5-4380-8bef-068062e3e3ee"),
                    Key = "key_three",
                    Name = "Name Three",
                    Description = "Description Three"
                }
            };
        }

        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody]TaskTestDto task)
        {
            return Ok();
        }

        [HttpPut]
        [Route("update/{taskId}")]
        public IActionResult Update(Guid taskId, [FromBody]TaskTestDto task)
        {
            return Ok();
        }

        [HttpDelete]
        [Route("delete/{taskId}")]
        public IActionResult Delete(Guid taskId)
        {
            return Ok();
        }

        [HttpGet]
        [Route("gettasks")]
        public IActionResult GetAll()
        {
            return Ok(_tasks);
        }

        [HttpGet]
        [Route("gettask/{taskId}")]
        public IActionResult Get(Guid taskId)
        {
            return Ok(_tasks.FirstOrDefault(q => q.Id == taskId));
        }

        public class TaskTestDto
        {
            public Guid Id { get; set; }
            public string Key { get; set; }
            public string Description { get; set; }
            public string Name { get; set; }
        }
    }
}

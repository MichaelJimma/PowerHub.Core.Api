using Microsoft.AspNetCore.Mvc;
using PowerHub.Core.Dal.QueryParameters;
using PowerHub.Core.Utils;
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
                },
                new TaskTestDto
                {
                    Id = Guid.Parse("ef0c2680-09ea-4ae4-b603-ff606f06b9ad"),
                    Key = "key_four",
                    Name = "Name Four",
                    Description = "Description Four"
                },
                new TaskTestDto
                {
                    Id = Guid.Parse("b82d47cd-05b8-4f19-8bc7-68fa04e1548c"),
                    Key = "key_five",
                    Name = "Name Five",
                    Description = "Description Five"
                },
                new TaskTestDto
                {
                    Id = Guid.Parse("1e894772-0cb8-4432-9cef-b387a855a186"),
                    Key = "key_si",
                    Name = "Name Six",
                    Description = "Description Six"
                },
                new TaskTestDto
                {
                    Id = Guid.Parse("a32962d8-ef92-4514-9eb9-3c78bc0c17ad"),
                    Key = "key_seven",
                    Name = "Name Seven",
                    Description = "Description Seven"
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
        public IActionResult GetAll(Pagination pagination)
        {
            var query = _tasks
                .AsQueryable()
                .WhereIf(pagination.HasQuery, q =>
                    q.Key.Contains(pagination.Query) ||
                    q.Name.Contains(pagination.Query) ||
                    q.Description.Contains(pagination.Query));

            int count = query.Count();

            Response.Headers.Add("X-Pagination", count.ToString());

            var res = query
                .Skip((pagination.Page - 1) * pagination.PageCount)
                .Take(pagination.PageCount)
                .ToList();

            return Ok(res);
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

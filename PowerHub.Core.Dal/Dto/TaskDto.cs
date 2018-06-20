using System;
using System.ComponentModel.DataAnnotations;

namespace PowerHub.Core.Dal.Dto
{
    public class TaskDto : IEquatable<TaskDto>
    {
        public Guid taskid { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string name { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string key { get; set; }

        [DataType(DataType.Text)]
        [StringLength(maximumLength: 500, MinimumLength = 2,
        ErrorMessage = "The property {0} should have {1} maximum characters and {2} minimum characters")]
        public string description { get; set; }

        public bool Equals(TaskDto other)
        {
            return other.taskid == taskid;
        }

    }
}

using AutoMapper;
using PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities;
using PowerHub.Core.Dal.Dto;
using PowerHub.Core.Dal.Dto.UpdateDto;

namespace PowerHub.Core.Api.AutoMapperProfiles
{
    public class TaskProfile : Profile
    {
        public TaskProfile()
        {
            CreateMap<Tasks, TaskDto>().ReverseMap();

            CreateMap<Tasks, TaskUpdateDto>().ReverseMap();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using UserStore.Application.Services;
using UserStore.Core.Models;
using WebAPI.Contracts;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<ActionResult<List<UsersResponse>>> GetUsers()
        {
            var users = await _userService.GetAllUsers();
            var response = users.Select(u => new UsersResponse(u.Id, u.FirstName, u.LastName, u.Email, u.Photo));
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateUser([FromBody] UsersRequest userRequest)
        {
            var (user, error) = UserStore.Core.Models.User.Create(
                Guid.NewGuid(),
                userRequest.FirstName,
                userRequest.LastName,
                userRequest.Email,
                userRequest.Photo
            );
            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }
            var userId = await _userService.CreateUser(user);
            return Ok(userId);
        }

        [HttpPut("{id:guid}")]
        public async Task<ActionResult<Guid>> UpdateUser(Guid id, [FromBody] UsersRequest request)
        {
            var userId = await _userService.UpdateUser(id, request.FirstName, request.LastName, request.Email, request.Photo);
            return Ok(userId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<Guid>> DeleteUser(Guid id)
        {
            return Ok(await _userService.DeleteUser(id));
        }

    }
}

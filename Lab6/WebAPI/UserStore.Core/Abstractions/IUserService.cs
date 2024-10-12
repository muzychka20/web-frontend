using UserStore.Core.Models;

namespace UserStore.Application.Services
{
    public interface IUserService
    {
        Task<Guid> CreateUser(User user);
        Task<Guid> DeleteUser(Guid id);
        Task<List<User>> GetAllUsers();
        Task<Guid> UpdateUser(Guid id, string firstName, string lastName, string email, string photo);
    }
}
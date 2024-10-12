using UserStore.Core.Models;
using UserStore.DataAccess.Repositories;

namespace UserStore.Application.Services
{
    public class UserService : IUserService
    {
        private IUsersRepository _userRepository;

        public UserService(IUsersRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<List<User>> GetAllUsers()
        {
            return await _userRepository.Get();
        }

        public async Task<Guid> CreateUser(User user)
        {
            return await _userRepository.Create(user);
        }

        public async Task<Guid> UpdateUser(Guid id, string firstName, string lastName, string email, string photo)
        {
            return await _userRepository.Update(id, firstName, lastName, email, photo);
        }

        public async Task<Guid> DeleteUser(Guid id)
        {
            return await _userRepository.Delete(id);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserStore.Core.Models;
using UserStore.DataAccess.Entities;

namespace UserStore.DataAccess.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly UserStoreDbContext _context;

        public UsersRepository(UserStoreDbContext context)
        {
            _context = context;
        }

        public async Task<List<User>> Get()
        {
            var userEntities = await _context.Users
                .AsNoTracking()
                .ToListAsync();
            var users = userEntities
                .Select(u => User.Create(u.Id, u.FirstName, u.LastName, u.Email, u.Photo).User)
                .ToList();
            return users;
        }

        public async Task<Guid> Create(User user)
        {
            var userEntity = new UserEntity
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                Photo = user.Photo,
            };
            await _context.Users.AddAsync(userEntity);
            await _context.SaveChangesAsync();
            return userEntity.Id;
        }

        public async Task<Guid> Update(Guid id, string firstName, string lastName, string email, string photo)
        {
            await _context.Users
                .Where(u => u.Id == id)                
                .ExecuteUpdateAsync(s => s
                    .SetProperty(u => u.FirstName, u => firstName)
                    .SetProperty(u => u.LastName, u => lastName)
                    .SetProperty(u => u.Email, u => email)
                    .SetProperty(u => u.Photo, u => photo)
                );
            return id;
        }

        public async Task<Guid> Delete(Guid id)
        {
            await _context.Users
                .Where(u => u.Id == id)
                .ExecuteDeleteAsync();
            return id;
        }
    }
}

﻿using UserStore.Core.Models;

namespace UserStore.DataAccess.Repositories
{
    public interface IUsersRepository
    {
        Task<Guid> Create(User user);
        Task<Guid> Delete(Guid id);
        Task<List<User>> Get();
        Task<Guid> Update(Guid id, string firstName, string lastName, string email, string photo);
    }
}
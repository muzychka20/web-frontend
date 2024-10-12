using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;

namespace UserStore.Core.Models
{
    public class User
    {
        public const int MAX_LENGTH = 250;
        private User(Guid id, string firstName, string lastName, string email, string photo)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            Photo = photo;
        }

        public Guid Id { get; }

        public string FirstName { get; } = string.Empty;

        public string LastName { get; } = string.Empty;

        public string Email { get; } = string.Empty;

        public string Photo { get; } = string.Empty;

        public static (User User, string Error) Create(Guid id, string firstName, string lastName, string email, string photo)
        {
            var error = string.Empty;
            var user = new User(id, firstName, lastName, email, photo);
            if (string.IsNullOrEmpty(firstName) || firstName.Length > MAX_LENGTH)
            {
                error += "First name can not be empty or longer 250 symbols.";
            }
            if (string.IsNullOrEmpty(lastName) || lastName.Length > MAX_LENGTH)
            {
                error += "Last name can not be empty or longer 250 symbols.";
            }
            return (user, error);
        }
    }
}

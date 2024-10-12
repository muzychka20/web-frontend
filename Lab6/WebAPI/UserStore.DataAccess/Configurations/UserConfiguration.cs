using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserStore.DataAccess.Entities;
using UserStore.Core.Models;

namespace UserStore.DataAccess.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<UserEntity>
    {
        public void Configure(EntityTypeBuilder<UserEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(u => u.FirstName)
                .HasMaxLength(User.MAX_LENGTH)
                .IsRequired();

            builder.Property(u => u.LastName)
                .HasMaxLength(User.MAX_LENGTH)
                .IsRequired();

            builder.Property(u => u.Email)                
                .IsRequired();

            builder.Property(u => u.Photo)
                .IsRequired();
        }
    }
}

namespace WebAPI.Contracts
{
    public record UsersResponse
    (
        Guid Id,
        string FirstName,
        string LastName,
        string Email,
        string Photo
    );
}

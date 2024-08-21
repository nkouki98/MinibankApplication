using System.Threading.Tasks;
using MyMiniBank_API.Models;

public interface IAccountService
{
    Task<Account?> GetAccountAsync(string id);
    Task CreateAccountAsync(string id, string username, decimal initialBalance, string currency);
    Task DepositAsync(string id, decimal amount, string currency);
    Task WithdrawAsync(string id, decimal amount, string currency);
}

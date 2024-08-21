using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyMiniBank_API.Models;
using MyMiniBank_API.Utilities;

namespace MyMiniBank_API.Services
{
    public class AccountService : IAccountService
    {
        private readonly List<Account> _accounts;

        public AccountService()
        {
            _accounts = new List<Account>(); // Initialize an empty list
        }

        
        public async Task<Account?> GetAccountAsync(string id)
        {
            var account = _accounts.FirstOrDefault(a => a.Id == id);
            return await Task.FromResult(account); // Return null if account not found
        }

        public async Task CreateAccountAsync(string id, string username, decimal initialBalance, string currency)
        {
            var account = new Account(id, username, currency)
            {
                Balance = initialBalance
            };
            _accounts.Add(account);
            await Task.CompletedTask;
        }

        public async Task DepositAsync(string id, decimal amount, string currency)
        {
            var account = await GetAccountAsync(id);
            if (account != null)
            {
                decimal amountInCad = ConvertToCad(amount, currency);
                account.Balance += amountInCad;
            }
            await Task.CompletedTask;
        }

        public async Task WithdrawAsync(string id, decimal amount, string currency)
        {
            var account = await GetAccountAsync(id);
            if (account != null)
            {
                decimal amountInCad = ConvertToCad(amount, currency);
                account.Balance -= amountInCad;
            }
            await Task.CompletedTask;
        }

        private decimal ConvertToCad(decimal amount, string currency)
        {
            return currency switch
            {
                "USD" => amount / ExchangeRates.UsdToCadRate,
                "MXN" => amount / ExchangeRates.MxnToCadRate,
                "EURO" => amount / ExchangeRates.EuroToCadRate,
                _ => amount
            };
        }
    }
}

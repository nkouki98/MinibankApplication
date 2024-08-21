using Microsoft.AspNetCore.Mvc;
using MyMiniBank_API.Services;
using MyMiniBank_API.Models;
using System.Threading.Tasks;
using System;

namespace MyMiniBank_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAccount(string id)
        {
            var account = await _accountService.GetAccountAsync(id);
            if (account == null)
                return NotFound("Account not found");

            return Ok(new { balance = account.Balance, username = account.Username, currency = account.Currency });
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateAccount([FromBody] AccountCreationRequest request)
        {
            var id = Guid.NewGuid().ToString(); // Generate a unique ID for the account

            await _accountService.CreateAccountAsync(id, request.Username, request.InitialBalance, request.Currency);

            return Ok(new { message = "Account created successfully", accountId = id });
        }

        [HttpPost("{id}/deposit")]
        public async Task<IActionResult> Deposit(string id, [FromBody] TransactionRequest transaction)
        {
            await _accountService.DepositAsync(id, transaction.Amount, transaction.Currency);
            return Ok();
        }

        [HttpPost("{id}/withdraw")]
        public async Task<IActionResult> Withdraw(string id, [FromBody] TransactionRequest transaction)
        {
            await _accountService.WithdrawAsync(id, transaction.Amount, transaction.Currency);
            return Ok();
        }
    }
}

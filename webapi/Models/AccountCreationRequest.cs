namespace MyMiniBank_API.Models
{
    public class AccountCreationRequest
    {
        public string Username { get; }
        public string Currency { get; } // CAD, USD, MXN, EURO
        public decimal InitialBalance { get; set; }

        public AccountCreationRequest(string username, string currency, decimal initialBalance = 0m)
        {
            Username = username;
            Currency = currency;
            InitialBalance = initialBalance;
        }
    }
}

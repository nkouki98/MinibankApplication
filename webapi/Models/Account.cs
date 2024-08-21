namespace MyMiniBank_API.Models
{
    public class Account
    {
        public string Id { get; }
        public string Username { get; }
        public decimal Balance { get; set; }
        public string Currency { get; }

        public Account(string id, string username, string currency, decimal balance = 0m)
        {
            Id = id;
            Username = username;
            Currency = currency;
            Balance = balance;
        }
    }
}

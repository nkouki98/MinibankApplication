namespace MyMiniBank_API.Models
{
    public class TransactionRequest
    {
        public decimal Amount { get; }
        public string Currency { get; }

        public TransactionRequest(decimal amount, string currency)
        {
            Amount = amount;
            Currency = currency;
        }
    }
}

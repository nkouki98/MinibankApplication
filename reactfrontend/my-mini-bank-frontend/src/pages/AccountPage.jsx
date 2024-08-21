import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAccount } from '../api/AccountAPI';
import AccountDetails from '../components/AccountDetails';
import Deposit from '../components/Deposit';
import Withdraw from '../components/Withdraw';

const AccountPage = () => {
  const { id } = useParams(); // Extract the account ID from the route
  const [account, setAccount] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('CAD');
  const [selectedAmount, setSelectedAmount] = useState();
  const [error, setError] = useState(null);

  const fetchAccountDetails = async () => {
    try {
      console.log(`Fetching details for account`);

      const data = await getAccount(id); // Use the ID from the route
      setAccount(data);
    } catch (err) {
      setError('Failed to fetch account details');
    }
  };

  useEffect(() => {
    if (id) {
      fetchAccountDetails();
    }
  }, [id]);

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };
  const handleAmountChange = (e) => {
    setSelectedAmount(e.target.value);
  };
  const handleActionSuccess = () => {
    fetchAccountDetails(); // Refresh account details after deposit
  };

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!account) {
    return <p className="text-gray-500 text-center">Loading...</p>;
  }

  return (
    <>
    <div className='bg-stone-400 min-h-screen py-8'>
    <div className="max-w-lg mx-auto rounded-lg bg-stone-100 shadow-xl border border-neutral-300 space-y-8 p-12 mt-40">
      <h1>Welcome, <p><strong>{account.username}!</strong></p></h1>
      <AccountDetails id={id} account={account} />
      <div className="mb-4">
        <label htmlFor="currency" className="block text-lg font-medium mb-2">Select Currency:</label>
        <select
          id="currency"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="CAD">CAD</option>
          <option value="USD">USD</option>
          <option value="MXN">MXN</option>
          <option value="EURO">EURO</option>
        </select>
       
        <input
        type="number"
        value={selectedAmount}
        onChange={handleAmountChange}
        placeholder="Enter amount to Deposit or Withdraw"
        className="block py-1.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-neutral-600 peer"
      />

      </div>
      <div className="flex space-x-3 justify-center"> {/* Flex container with space between items */}
        <div className="inline-block">
          <Deposit
            accountId={id}
            selectedCurrency={selectedCurrency}
            onSuccess={handleActionSuccess}
            selectedAmount={selectedAmount}
          />
        </div>
        <div className="inline-block">
          <Withdraw
            accountId={id}
            selectedCurrency={selectedCurrency}
            onSuccess={handleActionSuccess}
            selectedAmount={selectedAmount}
          />
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default AccountPage;

import React, { useState } from 'react';
import { deposit } from '../api/AccountAPI';

const Deposit = ({ accountId, selectedCurrency, onSuccess, selectedAmount }) => {
    const [amount, setAmount] = useState('');
  
    const handleDeposit = async () => {
      console.log('selectedAmount:', selectedAmount); // Check static value
      if (selectedAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
      }
      try {
        await deposit(accountId, parseFloat(selectedAmount), selectedCurrency);
        setAmount(''); // Clear input after successful deposit
        if (onSuccess) {
          onSuccess();
        }
      } catch (error) {
        console.error("Deposit failed:", error);
        alert("Failed to deposit.");
      }
    };
  
    return (
     <>   
        <button  type="submit" onClick={handleDeposit} className="inline-block bg-gray-200 rounded px-2 pb-2 pt-1.5 text-sm tracking-tighter font-medium leading-normal text-primary hover:text-orange-700 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none hover:scale-95"  
    
    >
        Deposit
      </button>
    </>
    );
  };
  

  export default Deposit;

import React, { useState } from 'react';
import { withdraw } from '../api/AccountAPI';

const Withdraw = ({ accountId, selectedCurrency, onSuccess, selectedAmount }) => {
  const [amount, setAmount] = useState('');

  const handleWithdraw = async (e) => {
    e.preventDefault();
    try {
      await withdraw(accountId, parseFloat(selectedAmount), selectedCurrency);

      setAmount('');
      if(onSuccess){
        onSuccess();
      }
    } catch (error) {
      console.error('Failed to withdraw:', error);
    }
  };

  return (
   
    <>


    <button  type="submit" onClick={handleWithdraw} className="inline-block bg-gray-200 rounded px-2 pb-2 pt-1.5 text-sm tracking-tighter font-medium leading-normal text-primary hover:text-orange-700 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none hover:scale-95"  
    
    >
        Withdraw
      </button>
    </>
      

  );
};

export default Withdraw;

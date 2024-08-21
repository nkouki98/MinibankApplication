// src/components/AccountActionForm.jsx

import React, { useState } from 'react';

const AccountActions = ({ onDeposit, onWithdraw }) => {
  const [amount, setAmount] = useState('');
  const [actionType, setActionType] = useState('deposit');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionAmount = parseFloat(amount);
    if (!isNaN(transactionAmount) && transactionAmount > 0) {
      if (actionType === 'deposit') {
        onDeposit(transactionAmount);
      } else if (actionType === 'withdraw') {
        onWithdraw(transactionAmount);
      }
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start space-y-4">
      <label className="text-lg font-medium">Choose Action</label>
      <select
        value={actionType}
        onChange={(e) => setActionType(e.target.value)}
        className="border rounded px-3 py-2 text-gray-900 mb-4"
      >
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>

      <label className="text-lg font-medium">
        {actionType.charAt(0).toUpperCase() + actionType.slice(1)} Amount
      </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="border rounded px-3 py-2 text-gray-900"
      />

      <button
        type="submit"
        className={`font-bold py-2 px-4 rounded ${
          actionType === 'deposit' ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'
        } text-white`}
      >
        {actionType.charAt(0).toUpperCase() + actionType.slice(1)}
      </button>
    </form>
  );
};

export default AccountActions;

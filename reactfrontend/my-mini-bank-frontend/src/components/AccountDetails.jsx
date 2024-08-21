import React from 'react';

const AccountDetails = ({ id, account}) => {
  return (
    <div className="w-full p-12 border rounded-lg border-zinc-300 mb-4 flex flex-col items-center">
    <h2 className="text-lg font-normal mb-4 text-gray-900 font-sans -tracking-wider">
      Checking Account Information
    </h2>
    <div className="text-cyan-800 font-mono text-start text-base">
      <p><strong>Account:</strong> {id.substring(0, 8)}</p>
      <p><strong>Balance:</strong> ${account.balance.toFixed(2)}({ account.currency})</p>
    </div>
  </div>
  
  );
};

export default AccountDetails;

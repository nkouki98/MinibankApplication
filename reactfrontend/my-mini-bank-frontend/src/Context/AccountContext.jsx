import React, { createContext, useContext, useState } from 'react';

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [accountId, setAccountId] = useState(null);

  return (
    <AccountContext.Provider value={{ accountId, setAccountId }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);

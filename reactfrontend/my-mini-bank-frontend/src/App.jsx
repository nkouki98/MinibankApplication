import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AccountPage from './pages/AccountPage'; // Ensure this component exists
import CreateAccount from './components/CreateAccount';
import { AccountProvider } from './Context/AccountContext';
import AccountDetails from './components/AccountDetails';

const App = () => {
  return (
    <AccountProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/account/:id" element={<AccountPage />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </AccountProvider>
  );
};

export default App;


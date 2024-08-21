import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAccountAPI } from '../api/AccountAPI';
import { useAccount } from '../Context/AccountContext';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [currency, setCurrency] = useState('CAD');
  const [initialBalance, setInitialBalance] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setAccountId } = useAccount(); // Use context to set accountId

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createAccountAPI(username, currency, parseFloat(initialBalance));
      console.log('Account created:', response);

      const accountID = response.accountId; // Get account ID from response
      setAccountId(accountID); // Set account ID in context
      navigate(`/account/${accountID}`); // Navigate to account page using the ID
    } catch (err) {
      setError('Failed to create account');
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900 ">
    
      <div className="w-full max-w-md  p-6 rounded-sm shadow-sm">
      <div className="flex items-center justify-center mb-10">
      <h1 className='text-gray-200 text-2xl font-sans tracking-tighter mb-10'>MyMiniBankApp.</h1>
    </div>

        <h1 className="text-xl font-semibold mb-4 text-center text-neutral-400">Create Checking Account</h1>
        <form onSubmit={handleSubmit} className="relative z-0 w-full mb-5 group">
          <div className="relative z-0 w-full mb-5 group">
                <input
        type="text"
        name="name"
        id="floating_name"
        className="block py-2.5 px-0 w-full text-lg text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-neutral-600 peer placeholder-transparent"
        placeholder=" "
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />


            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-cyan-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="balance"
              id="floating_balance"
              className="block py-2.5 px-0 w-full text-lg text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-neutral-600 peer"
              placeholder=" "
              value={initialBalance}
              onChange={(e) => setInitialBalance(e.target.value)}
              required
            />
            <label
              htmlFor="floating_balance"
              className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-cyan-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Balance
            </label>
          </div>
          <div className='flex justify-center w-full'>
  <button
    type="submit"
    className="text-gray-200 bg-orange-800 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base w-full px-5 py-2.5"
  >
    Join
  </button>
</div>

        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default CreateAccount;

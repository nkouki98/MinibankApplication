// src/api/accountApi.js

const BASE_URL = 'http://localhost:5197/api/Account';

// Create account
export const createAccountAPI = async (username, currency, initialBalance) => {
    try {
      const response = await fetch(`${BASE_URL}/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, currency, initialBalance }),
      });
      if (!response.ok) throw new Error('Failed to create account');
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  

export const getAccount = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Failed to fetch account');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deposit = async (id, amount, currency) => {
  try {
    const response = await fetch(`http://localhost:5197/api/Account/${id}/deposit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency }),
    });

    console.log('Response Status:', response.status);

    // Handle empty responses
    if (!response.ok) {
      const errorText = await response.text(); // Read the error message
      throw new Error(`Failed to deposit: ${errorText}`);
    }

    // Check if response is empty
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    } else {
      return {}; // Return an empty object or handle accordingly
    }
  } catch (error) {
    console.error('Error in deposit:', error);
    throw error;
  }
};


export const withdraw = async (id, amount, currency) => {
  try {
    const response = await fetch(`http://localhost:5197/api/Account/${id}/withdraw`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency }),
    });

    console.log('Response Status:', response.status);

    // Handle empty responses
    if (!response.ok) {
      const errorText = await response.text(); // Read the error message
      throw new Error(`Failed to withdraw: ${errorText}`);
    }

    // Check if response is empty
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    } else {
      return {}; // Return an empty object or handle accordingly
    }
  } catch (error) {
    console.error('Error in withdraw:', error);
    throw error;
  }
};


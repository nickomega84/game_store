const API_URL = 'http://localhost:3000';

export const fetchGames = async () => {
  const response = await fetch(`${API_URL}/api/v1/games`); 
  if (!response.ok) throw new Error('Failed to connect to Rails API');
  return response.json();
};

export const checkoutCart = async (cart: { id: number; quantity: number }[]) => {
  const response = await fetch(`${API_URL}/api/v1/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cart }), 
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'Payment transaction failed');
  }
  
  return data;
};
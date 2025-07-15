const BASE_URL = 'https://fakestoreapi.com';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message || 'An API error occurred');
  }
  return response.json();
};

export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  return handleResponse(response);
};

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return handleResponse(response);
};

export const getAllCategories = async () => {
  const response = await fetch(`${BASE_URL}/products/categories`);
  return handleResponse(response);
};

export const getProductsInCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/products/category/${category}`);
  return handleResponse(response);
};

export const login = async (username, password) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  return handleResponse(response);
};

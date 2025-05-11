import { fetchWithAuth, createAuthHeaders } from './helper';

const BASE_URL = 'http://localhost:5001/ebuddy-2b83d/us-central1/api';

// Login
export const loginUser = async (username: string, password: string) => {
  const response = await fetch(`${BASE_URL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: username, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};

// Register
export const registerUser = async (email: string, name: string, password: string) => {
  const response = await fetch(`${BASE_URL}/user/create-user-data`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email: email,
      password,
      totalAverageWeightRatings: 0,
      numberOfRents: 0,
      recentlyActive: new Date(),
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to register");
  }

  return data;
};

// Fetch User Data
export const fetchUserData = async (token: string, userId: string = '') => {
  const url = userId
    ? `${BASE_URL}/user/detail-user-data/${userId}`
    : `${BASE_URL}/user/fetch-user-data`;

  return fetchWithAuth(url, {
    headers: createAuthHeaders(token),
  });
};

// Create User Data
export const createUserData = async (token: string, userData: {
  name: string;
  email: string;
  password: string;
  totalAverageWeightRatings: number;
  numberOfRents: number;
}) => {
  return fetchWithAuth(`${BASE_URL}/user/create-user-data`, {
    method: 'POST',
    headers: createAuthHeaders(token),
    body: JSON.stringify(userData),
  });
};

// Update User Data
export const updateUserData = async (token: string, userId: string, updatedData: {
  name: string;
  email: string;
  totalAverageWeightRatings: number;
  numberOfRents: number;
}) => {
  return fetchWithAuth(`${BASE_URL}/user/update-user-data/${userId}`, {
    method: 'PUT',
    headers: createAuthHeaders(token),
    body: JSON.stringify(updatedData),
  });
};

// Delete User Data
export const deleteUserData = async (token: string, userId: string) => {
  return fetchWithAuth(`${BASE_URL}/user/delete-user-data/${userId}`, {
    method: 'DELETE',
    headers: createAuthHeaders(token),
  });
};

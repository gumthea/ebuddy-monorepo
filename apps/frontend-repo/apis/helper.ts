export const fetchWithAuth = async (url: string, options: RequestInit) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Unknown error');
  }
};

export const createAuthHeaders = (token: string) => ({
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json',
});

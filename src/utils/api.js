// utils/api.js
const baseUrl = "http://localhost:3001";

const getItems = async (token) => {
  try {
    const headers = {
      Accept: "application/json",
    };

    if (token) {
      headers.authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${baseUrl}/items`, { headers });

    if (!res.ok) {
      throw new Error(`Error fetching request! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error handling request:", error);
    throw error;
  }
};

const addItems = async ({ name, imageUrl, weather }, token) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (token) {
      headers.authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${baseUrl}/items`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name,
        imageUrl,
        weather: String(weather).toLowerCase(),
      }),
    });

    if (!res.ok) {
      throw new Error(`Error fetching request! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error handling request:", error);
    throw error;
  }
};

const deleteItems = async (_id, token) => {
  try {
    const headers = {};
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }

    const res = await fetch(`${baseUrl}/items/${_id}`, {
      method: "DELETE",
      headers,
    });

    if (!res.ok) {
      throw new Error(`Error fetching request! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error handling request:", error);
    throw error;
  }
};

export { getItems, addItems, deleteItems };

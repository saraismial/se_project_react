/* global process */
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.spacegamers.net"
    : "http://localhost:3001";

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

const addCardLike = async (id, token) => {
  const headers = {
    Accept: "application/json",
  };
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers,
  });

  if (!res.ok) {
    throw new Error(`Error liking item! Status: ${res.status}`);
  }

  return res.json();
};

const removeCardLike = async (id, token) => {
  const headers = {
    Accept: "application/json",
  };
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers,
  });

  if (!res.ok) {
    throw new Error(`Error removing like! Status: ${res.status}`);
  }

  return res.json();
};


export { getItems, addItems, deleteItems, addCardLike, removeCardLike };

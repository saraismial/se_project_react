/* global process */
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.spacegamers.net"
    : "http://localhost:3001";

const checkRes = (res) => {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((data) => {
        const message = data?.message || 'Error. Something went wrong.'
        return Promise.reject(new Error(message));
    });
};

const register = ({ name, avatar, email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, avatar, email, password }),
    }).then(checkRes);
}

const login = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }).then(checkRes);
};

const getUserData = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    }).then(checkRes);
} 

const updateUser = ({ name, avatar }, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(checkRes);
};

export { register, login, getUserData, updateUser };
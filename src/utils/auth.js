const BASE_URL = 'http://localhost:3001';

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

export { register, login, getUserData };
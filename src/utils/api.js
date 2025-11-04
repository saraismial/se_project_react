const baseUrl = 'http://localhost:3001';

const getItems = async () => {
    try {
        const res = await fetch(`${baseUrl}/items`, {
            headers: {
                    Accept: "application/json"
                }
        });

        if(!res.ok) {
            throw new Error(`Error fetching request! Status: ${res.status}`);
        }

        const data = await res.json();

        return data;
    }
    catch(error) {
        console.error('Error handling request:', error);
        throw error;
    }

}

const addItems = async ({ name, imageUrl, weather }) => {
    try {
        const res = await fetch(`${baseUrl}/items`, {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
            body: JSON.stringify({
                name,
                imageUrl,
                weather: String(weather).toLowerCase()
            })
        });

        const data = await res.json();
        return data;
    }
    catch(error) {
        console.error('Error handling request:', error);
        throw error;
    }
}

const deleteItems = async (_id) => {
    try {
        const res = await fetch(`${baseUrl}/items/${_id}`, {
            method: "DELETE"
        });

        const data = await res.json();
        return data;
    }
    catch(error) {
        console.error('Error handling request:', error);
        throw error;
    }
}

export { getItems, addItems, deleteItems };
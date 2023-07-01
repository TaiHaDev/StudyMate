const url = "http://localhost:8080/";

export const getRequest = async (endpoint) => {
    const response = await fetch(url + endpoint);
    if (response.ok) {
        return await response.json();
    }
}
// DELETE request
export const deleteRequest = async (url, endpoint, headers = {}) => {
    try {
        const response = await fetch(url + endpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error(`There was an error with your fetch operation: ${error.message}`);
        throw error;
    }
};

// POST request
export const postRequest = async (url, endpoint, body = {}, headers = {}) => {
    try {
        const response = await fetch(url + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error(`There was an error with your fetch operation: ${error.message}`);
        throw error;
    }
};
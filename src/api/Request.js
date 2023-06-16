const url = "http://localhost:8080/";

export const getRequest = async (endpoint) => {
    const response = await fetch(url + endpoint);
    if (response.ok) {
        return await response.json();
    }
}
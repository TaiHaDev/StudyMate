const url = "http://localhost:8080/";
const authEndpoint = "authenticate";
export const getRequest = async (endpoint) => {
  const response = await fetch(url + endpoint);
  if (response.ok) {
    return await response.json();
  }
};
// DELETE request
export const deleteRequest = async (endpoint) => {
  try {
    const response = await fetch(url + endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("jwt")
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(
      `There was an error with your fetch operation: ${error.message}`
    );
    throw error;
  }
};

export const postRequest = async (endpoint, body = {}) => {
  try {
    const response = await fetch(url + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("jwt")
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(
      `There was an error with your fetch operation: ${error.message}`
    );
    throw error;
  }
};

export async function fetchWithBasicAuth(username, password) {
  let headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(username + ":" + password));

  try {
    const response = await fetch(url + authEndpoint, {
      method: "GET",
      headers: headers,
    });

    const data = await response.json();
    console.log(data, data.email, data.authorities);
    let authHeader = response.headers.get("Authorization");
    localStorage.setItem("credential", JSON.stringify({
        id: data.id,
        email: data.email,
        authorities: data.authorities,
      }));
    localStorage.setItem("jwt", authHeader);
  } catch (error) {
    console.error("Error:", error);
  }
}

export const validateGoogleJWT = async jwt => {
    console.log(jwt);
    let headers = new Headers();
    headers.set("google", jwt);
    try {
        const response = await fetch(url + authEndpoint, {
          method: "GET",
          headers: headers,
        });
    
        const data = await response.json();
        console.log(data, data.email, data.authorities);
        let authHeader = response.headers.get("Authorization");
        localStorage.setItem("credential", JSON.stringify({
          id: data.id,
          email: data.email,
          authorities: data.authorities,
        }));
        localStorage.setItem("jwt", authHeader);
      } catch (error) {
        console.error("Error:", error);
      }
}

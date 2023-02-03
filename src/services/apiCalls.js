const host = "http://localhost:8000/";

export const login = async (loginData) => {
    const login = await fetch(host + 'api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });

    const result = await login.json();

    return result;
} 
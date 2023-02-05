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

export const register = async (registerData) => {
    const register = await fetch(host + 'api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    });

    const result = await register.json();

    return result;
}

export const profile = async (token) => {
    const register = await fetch(host + 'api/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        }
    });

    const result = await register.json();

    return result;
}

export const getTasks = async (token) => {
    const getTasks = await fetch(host + 'api/tasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        }
    });

    const result = await getTasks.json();

    return result;
}

export const createTask = async (createTaskData, token) => {
    const register = await fetch(host + 'api/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        body: JSON.stringify(createTaskData)
    });

    const result = await register.json();

    return result;
}
const login = () => {
    return new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve('User logged in...');
        }, 2000);
    });
}

const updateAccont = () => {
    return new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve('Updating last login...');
        }, 2000);
    });
}

async function loginActivities() {
    const returnedLogin = await login();
    console.log(returnedLogin);

    const returnedUpdate = await updateAccont();
    console.log(returnedUpdate);
}

loginActivities();
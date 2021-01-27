const login = () => {
    return new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve('User logged in...');
        }, 2000);
    });
}

const updateAccount = () => {
    return new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve('Updating last login...');
        }, 2000);
    });
}

async function loginActivities(login, updateAccount) {
    const returnedLogin = await login;
    console.log(returnedLogin);

    const returnedUpdate = await updateAccount;
    console.log(returnedUpdate);
}

loginActivities(login(), updateAccount());
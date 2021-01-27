const greeting = new Promise((resolve, reject) => {
    resolve('Hi there');
    reject('Oops, bad greeting');
})

const updateAccount = new Promise((resolve, reject) => {
    resolve('Updating login...');
    reject('Error updating account with login');
})

const loginActivities = Promise.all([greeting, updateAccount]);

loginActivities.then(res => {
    res.forEach(activity => {
        console.log(activity);
    })
})
// https://api.github.com/users/enrique-fer/repos
// https://api.dailysmarty.com/posts 

async function queryApis() {
    try {
        const postsPromise = fetch('https://api.dailysmarty.com/posts');
        const posts = await postsPromise.then(res => res.json());
        console.log(posts);
    } catch(err) {
        console.log(err);
        console.log('There was an error with the DailySmarty API');
    }

    try {
        const reposPromise = fetch('https://api.github.com/users/enrique-fer/repos');
        const repos = await reposPromise.then(res => res.json());
        console.log(repos);
    } catch (err) {
        console.log(err);
        console.log('There was an error with the GitHub API');
    }
}

queryApis();
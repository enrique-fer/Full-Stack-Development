// https://api.github.com/users/enrique-fer/repos
// https://api.dailysmarty.com/posts 

async function queryApis() {
    const postsPromise = fetch('https://api.dailysmarty.com/posts');
    const posts = await postsPromise.then(res => res.json());
    console.log(posts);

    const reposPromise = fetch('https://api.github.com/users/enrique-fer/repos');
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
}

queryApis();
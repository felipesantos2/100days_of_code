const baseUrl = 'https://jsonplaceholder.typicode.com/';

const uri = 'posts/1'


async function getPosts(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`)
    }
    const json = await response.json();
    return json;
}

(async function () { // IIFE fuction expression
    const json = await getPosts(1);
    console.log(json)
}());
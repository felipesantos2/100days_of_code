### FETCH API

> FAZENDO REQUISIÇÃOES HTTP COM JAVASCRIPT

01
```js
function getPosts() {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(
            response => response.json()
        ).then(
            json => console.log(json)
        )
}
getPosts();

```

02
```js
// promise - async/await?
async function getPosts(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${id}`);
    if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`)
    }
    const json = await response.json();
    return json;
}

(async function () { // IIFE function expression
    const json = await getPosts();
    console.log(json)
}());

// retorno -> {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
```
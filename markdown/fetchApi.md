### FETCH API

> FAZENDO REQUISIÇÃOES HTTP COM JAVASCRIPT

01 - Retornando os resultados - GET
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

02 - Retornando os resultados - GET
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

03 - Enviando - POST

```js


// POST
async function addPost(data) {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; chatset=UTF-8'
        } 
    }

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`,
        options
    );

    if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`)
    }

    const json = await response.json();
    return json;
}


(async function () { // IIFE fuction expression
    const data = {
        // userID: 1,
        title: 'meu post',
        body: 'Meu conteudo - Felipe'
    }
    const json = await addPost(data);
    console.log(json)
}());

```


04 - Editando - PUT

```js

// PUT
async function editPost(data, id) {
    const options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; chatset=UTF-8'
        } 
    }

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        options
    );

    return getResponse(response);
}


(async function () { // IIFE fuction expression
    const data = {
        userID: 1,
        title: 'meu post',
        body: 'Meu conteudo - Felipe00'
    }
    const json = await editPost(data, 1);
    console.log(json)
}());

```
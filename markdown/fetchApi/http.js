// GET - recuperando as informações
//==========================================================================/
//==========================================================================/
async function getPosts(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return getResponse(response);
}

(async function () { // IIFE fuction expression
    const json = await getPosts(1);
    console.log(json)
}());


//==========================================================================/
//==========================================================================/

async function getResponse(response) {
    if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`)
    }

    return await response.json();
}

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

    return getResponse(response);
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


//
//==========================================================================/
//==========================================================================/

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



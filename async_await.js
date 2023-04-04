const getPosts = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();

    console.log(data)
}

getPosts();

const newPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let options = {
        method: 'POST',
        body: {
            title: 'Teste1',
            body: 'Este é um novo teste1',
            userId: 5
        }
    }

    const header = {
        'Content-type': 'application/json; charset=UTF-8'
    }

    let response = await fetch(url, options, header)
    let data = await response.json()

    console.log(data)
}

newPost();


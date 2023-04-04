const getById = (id) => {

    fetch(`hps://jsonplaceholder.typicode.com/posts/${0}`)
    .then(response => response.json())
    .then(json => console.log(json))
    // catch captura erro, exibindo o erro no console
    .catch(error => console.log(error))
    .finally(() => console.log('terminou'))
}

getById(2)
//getById(1)

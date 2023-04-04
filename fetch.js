/*function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    // then trata a object promise
    .then((response) => response.json())
    .then((json) => console.log(json));
}
getPosts();*/

const getPosts = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
};

getPosts("https://jsonplaceholder.typicode.com/posts");
getPosts("https://jsonplaceholder.typicode.com/users")

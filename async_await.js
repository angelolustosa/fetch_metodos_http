const header = {
  "Content-type": "application/json; charset=UTF-8",
};

const getPosts = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();

  console.log(data);
};

//getPosts();

const newPost = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  let options = {
    method: "POST",
    body: {
      title: "Teste1",
      body: "Este é um novo teste1",
      userId: 5,
    },
  };

  let response = await fetch(url, options, header);
  let data = await response.json();

  console.log(data);
};

//newPost();

const updatePost = async (id, body) => {
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  let options = {
    method: "PUT",
    body: JSON.stringify(body),
  };

  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };

  let response = await fetch(url, options, headers);
  let json = await response.json();

  console.log(json);
};

updatePost(
  2,
  JSON.stringify({
    id: 2,
    title: "Teste update",
    body: "teste update body",
    userId: 10,
  })
);

const updateOriginal = async (id, body) => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers,
    }
  );

  let json = await response.json();

  console.log(json);
};

updateOriginal(1, {
  id: 1,
  title: "foo",
  body: "bar",
  userId: 1,
});

const deletePost = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  console.log('deletado!');
};

deletePost(3)

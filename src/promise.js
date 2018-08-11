document.getElementById("app").innerHTML = `
<h1>Promise !</h1>
<br />
<div id="post"></div>
`;

const posts = [
  { title: "Post One", body: "Post One Body" },
  { title: "Post Two", body: "Post Two Body" }
];

function getPost() {
  let res = "";
  setTimeout(() => {
    posts.map(post => {
      return (res += `<li> ${post.title} </li>`);
    });

    document.getElementById("post").innerHTML = res;
  }, 1000);
}

// getPost();

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const err = false;

      !err ? resolve() : reject("Error: Something went wrong!");
    }, 2000);
  });
}

createPost({ title: "Post Three", body: "Post Three Body" })
  .then(getPost)
  .catch(error => console.log(error));

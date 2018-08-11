document.getElementById("app").innerHTML = `
<h1>Async - Await !</h1>
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

// async function init() {
//   await createPost({ title: "Post Three", body: "This is post three" });

//   getPost();
// }

// init();

//? Asunc / Await / Fetch

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
}

fetchUsers();

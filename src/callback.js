document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
<br />
 <div id="post"></div>
`;

const posts = [
  { title: "Post One", body: "Post One Body" },
  { title: "Post Two", body: "Post Two Body" }
];

// function getPost() {
//   setTimeout(() => {
//     let res = "";
//     posts.map(post => {
//       console.log(post.title);
//       return (res += `<li>${post.title}</li>`);
//     });
//     document.getElementById("post").innerHTML = res;
//   }, 3000);
// }

// also we can make more efficient using Destructuring like so
function getPost() {
  setTimeout(() => {
    let res = "";
    posts.map(({ title }) => {
      //console.log(post.title);
      return (res += `<li>${title}</li>`);
    });
    document.getElementById("post").innerHTML = res;
  }, 1000);
}

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// So handle above issue "callback" comes in the play - so for doing so
// we need to call immediately after push into the new data
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 5000);
}
// so first it create post and then callback fire for get the post and
// wait for 5 sec to print on the page

//getPost();

// createPost({ title: "Post Three", Body: "Post Three Body" });

createPost({ title: "Post Three", body: "Post Three Body" }, getPost);

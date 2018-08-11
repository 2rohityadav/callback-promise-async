document.getElementById("app").innerHTML = `
<h1>Promise.all([😱])</h1>
<br />
<div id="post"></div>
`;

// const promise1 = Promise.resolve("Wow made promise!");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "GoodBye");
// });

// Promise.all([promise1, promise2, promise3]).then(values => {
//   console.log(values);
// });

// ? Added one more promise

// const promise1 = Promise.resolve("Wow made promise!");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve ? resolve("promise resolved :-)") : reject("promise rejected :-(");
//   }, 2000);
// });

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res =>
//   res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then(values => {
//   console.log(values);
// });

//  ? Another example - Handling Multiple JavaScript Promises Even if Some Fail

// var p1 = new Promise(function(resolve, reject) {
//   resolve("one");
// });

// var p2 = new Promise(function(resolve, reject) {
//   reject("p2 rejected");
// });

// var p3 = new Promise(function(resolve, reject) {
//   resolve("three");
// });

// Promise.all([p1, p2, p3])
//   .then(function(res) {
//     console.log("Promise.all", res);
//   })
//   .catch(function(err) {
//     console.error("Promise.all error:- ", err);
//   });

// ? another example by fixing reslove Promises

function apiRequest(url) {
  return new Promise(function(resolve, reject) {
    //our fake api simply returns the string passed as the 'url'
    if (url) {
      resolve(url);
    } else {
      //if no url is passed to the function, it will fail
      reject("apiRequest failed!");
    }
  }).catch(function(err) {
    //return error;
    return err;
  }); //! if catched here then will return resolved promised with failed promises.
  // ! otherwise it will reject and give an error for all.
}

var p1 = apiRequest("urlOne");

//this one will fail
var p2 = apiRequest();

var p3 = apiRequest("urlThree");

Promise.all([p1, p2, p3])
  .then(function(res) {
    console.log("Promise.all", res);
  })
  .catch(function(err) {
    console.error("err", err);
  });

//Promise.all [ 'urlOne', 'apiRequest failed!', 'urlThree' ]

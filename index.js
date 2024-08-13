// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log("call Back Function Fired");
// }, 3000);

// console.log(3);
// console.log(4);

// 2nd Method Of Creating a request

// const demo = new XMLHttpRequest();

// demo.addEventListener("readystatechange", () => {
//   if (demo.readyState === 4) {
//     if (demo.status === 200) {
//       const data = JSON.parse(demo.responseText);
//       console.log(data);
//     } else {
//       console.error("Error:", demo.status, demo.statusText);
//     }
//   }
// });

// demo.open("GET", "index.json");
// demo.send();

////// CALL Back Hell ///////////////
// const getTodos = (resource, callback) => {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     // console.log(request, request.readyState);

//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//       //   console.log(request, request.responseText);
//     } else if (request.readyState === 4) {
//       callback("couldnt fetch data", undefined);
//       //   console.log("Could not fetch the data");
//     }
//   });

//   //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//   request.open("GET", resource);
//   request.send();
// };

// getTodos("index.json", (err, data) => {
//   console.log("Callback fired");
//   console.log(data);

//   getTodos("index1.json", (err, data) => {
//     console.log(data);
//     //   console.log(err, data);
//     //   if (err) {
//     //     console.log(err);
//     //   } else {
//     //     console.log(data);
//     //   }
//   });
// });

// ///// PROMISES /////////

// const getsomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve("RESOLVE DATA");
//     // reject("ERROR OCCURED");
//   });
// };

// // 1st Method

// // getsomething().then(
// //   (data) => {
// //     console.log(data);
// //   },
// //   (err) => {
// //     console.log(err);
// //   }
// // );

// // 2nd Method

// getsomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//// Creating a HTTP Request through Promises ////

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data); // Resolve with the actual data
      } else if (request.readyState === 4) {
        reject(`Error getting resource: ${request.status}`); // Include status code in the error
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("index1.json")
  .then((data) => {
    console.log("Promise resolved", data);
  })
  .catch((err) => {
    console.log("Error occurred", err);
  });

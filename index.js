// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log("call Back Function Fired");
// }, 3000);

// console.log(3);
// console.log(4);

const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    console.log(request, request.readyState);

    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.readyState === 4);
      //   console.log(request, request.responseText);
    } else if (request.readyState === 4) {
      callback("couldnt fetch data", undefined);
      //   console.log("Could not fetch the data");
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log("Callback fired");
  //   console.log(err, data);
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);

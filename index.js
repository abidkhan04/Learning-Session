// // // Local data in Local Storage

// localStorage.setItem("name", "Abid");
// localStorage.setItem("age", "26");

// // // get data from local storage

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");

// console.log(name, age);

// // Upadating data

// localStorage.setItem("name", "luigi");

// // Setting the value of age by dot method
// localStorage.age = "40";

// name1 = localStorage.getItem("name1");
// age = localStorage.getItem("age");
// console.log(name1, age);

// localStorage.removeItem("name1");

// name1 = localStorage.getItem("name1");

// console.log(name1);

// // Deleing a single item from a localstorage
// localStorage.clear();

// Converting An array into json data

const todos = [
  { text: "play Football", author: "Abid" },
  { text: "play tennis", author: "Adil" },
  { text: "play pc games", author: "shonni" },
];

localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");

console.log(JSON.parse(stored));

// fetch("index.json")
//   .then((response) => {
//     console.log("Data Fetched", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data Received", data);
//   })
//   .catch((err) => {
//     console.log("Error Occured", err);
//   });

// Through async and await

const getTodos = async () => {
  const response = await fetch("index.json");
  const data = await response.json();

  return data;
};

getTodos().then((data) => console.log("resolved:", data));

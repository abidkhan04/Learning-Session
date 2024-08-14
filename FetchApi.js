fetch("index.json")
  .then((response) => {
    console.log("Data Fetched", response);
    return response.json();
  })
  .then((data) => {
    console.log("Data Received", data);
  })
  .catch((err) => {
    console.log("Error Occured", err);
  });

const userone = {
  username: "Anna",
  email: "anna@gmail.com",

  login() {
    console.log("UserONe has logged in");
  },

  logout() {
    console.log("UserONe has logged out");
  },
};
const usertwo = {
  username: "Anna",
  email: "anna@gmail.com",

  login() {
    console.log("UserTwo has logged in");
  },

  logout() {
    console.log("UserTwo has logged out");
  },
};

// Its quite messy when we are creating more objects as
// the code is difficult to maintain
console.log(userone.username, userone.email);
userone.login();
usertwo.logout();

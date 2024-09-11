// const userone = {
//   username: "Anna",
//   email: "anna@gmail.com",

//   login() {
//     console.log("UserONe has logged in");
//   },

//   logout() {
//     console.log("UserONe has logged out");
//   },
// };
// const usertwo = {
//   username: "Anna",
//   email: "anna@gmail.com",

//   login() {
//     console.log("UserTwo has logged in");
//   },

//   logout() {
//     console.log("UserTwo has logged out");
//   },
// };

// // Its quite messy when we are creating more objects as
// // the code is difficult to maintain
// console.log(userone.username, userone.email);
// userone.login();
// usertwo.logout();

/// Class Constructor + Class Methods

class user {
  constructor(username, homeaddress, phoneno) {
    this.username = username;
    this.homeaddress = homeaddress;
    this.phoneno = phoneno;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in `);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incscore() {
    this.score += 1;
    console.log(`${this.username} has a score ${this.score}`);
    return this;
  }
}

class admin extends user {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}

const userone = new user("mario", "lane12", "0347");
const usertwo = new user("Anna", "lane13", "0347");
const userthree = new user("Abid", "lane14", "1234");
const userfour = new user("Robeel", "lane51", "2345");
const userfive = new user("Baitullah", "lane51", "2345");
const usersix = new admin("Meerai", "lane51", "2345");

console.log(userone, usertwo, userthree, userfour, usersix);

let users = [userone, usertwo, userthree, userfour, userfive, usersix];
console.log(users);

usersix.deleteUser(usertwo);
console.log(users);

// userone.login().incscore().incscore().logout();
// usertwo.login().incscore().incscore().incscore().logout();
// userthree.login().incscore().incscore().incscore().incscore().logout();
// userfour.login().incscore().incscore().incscore();
// userfive.login().incscore().incscore().incscore();
// usersix.login().incscore().incscore().incscore();

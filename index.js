// //Date and Time

// const now = new Date();

// console.log(now);
// console.log(typeof now);

// console.log("getFullYear:", now.getFullYear());
// console.log("getMonth:", now.getMonth());
// console.log("getDate:", now.getDate());
// console.log("getDay:", now.getDay());
// console.log("getHours:", now.getHours());
// console.log("getMinutes:", now.getMinutes());
// console.log("getSeconds:", now.getSeconds());

// console.log("getTimeStamp:", now.getTime());

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

//TimeStamps Comparison

// const before = new Date("January 15 2019 12:40:30");
// const now = new Date();
// // console.log(now1.getTime(), before.getTime());

// const diff = now.getTime() - before.getTime();
// console.log(diff);

// const Minutes = Math.round(diff / 1000 / 60);
// const Hours = Math.round(Minutes / 60);
// const days = Math.round(Hours / 24);

// console.log(Minutes, Hours, days);
// console.log(`The BLOG was written ${days} Days ago `);

// // //Converting a timestamp into a Date object

// const timestamp = now.getTime();
// console.log(new Date(timestamp));

// Designing a digital clock

const clock = document.querySelector(".clock");

const tick = () => {
  const nowtime = new Date();

  const h = nowtime.getHours();
  const m = nowtime.getMinutes();
  const s = nowtime.getSeconds();

  const html = `
  <span>${h}</span> :
  <span>${m}</span> :
  <span>${s}</span>
  
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);

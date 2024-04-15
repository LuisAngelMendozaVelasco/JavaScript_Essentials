// 3.1.22 Current time

let nowObj = new Date();
console.log(nowObj.toLocaleString()); // -> 4/3/2024, 2:26:59 PM

let now = Date.now(); // timestamp
let nowObj = new Date(now);
console.log(`now : ${typeof now} : ${now}`); // -> now : number : 1712176054986
console.log(`now : ${typeof nowObj} : ${nowObj}`); // -> now : object : Wed Apr 03 2024 14:27:34 GMT-0600 (Central Standard Time)
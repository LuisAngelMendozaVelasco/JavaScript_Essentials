// 3.1.26 Operating on individual date and time components

let date = new Date("2020-07-08T10:20:00");
console.log(date.getMonth()); // -> 6 
console.log(date.getDay()); // -> 3
console.log(date.getDate()); // 8
console.log(date.getHours()); // -> 10
date.setHours(12);
console.log(date.getHours()); // -> 12

let date = new Date("2020-07-08T10:20:00");
console.log(date.toLocaleDateString()); // -> 08/07/2020
console.log(date.toLocaleTimeString()); // -> 10:20:00
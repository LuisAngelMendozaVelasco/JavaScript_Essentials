// 3.1.23 Time specification with individual components

let date1 = new Date(2020, 6);
let date2 = new Date(2020, 6, 8);
let date3 = new Date(2020, 6, 8, 10);
let date4 = new Date(2020, 6, 8, 10, 20, 45);
console.log(date1.toLocaleString()); // -> 01/07/2020, 00:00:00
console.log(date2.toLocaleString()); // -> 08/07/2020, 00:00:00
console.log(date3.toLocaleString()); // -> 08/07/2020, 10:00:00
console.log(date4.toLocaleString()); // -> 08/07/2020, 10:20:45
// 3.1.21 Time zones and other tricks

let date1 = new Date(0);
let date2 = new Date(1000*60*60*10);
console.log(date1.toUTCString()); // -> Thu, 01 Jan 1970 00:00:00 GMT
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

console.log(date2.getTimezoneOffset()); // -> 0
console.log(date2.toLocaleString()); // -> 01/01/1970, 10:00:00
console.log(date2.toISOString()); // -> 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

console.log(date2.getTimezoneOffset()); // -> -60
console.log(date2.toLocaleString()); // -> 01/01/1970, 11:00:00
console.log(date2.toISOString()); // -> 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

date3 = new Date("2020-02-02T20:20:00.000");
date4 = new Date("2020-02-02T20:20:00.000Z");
console.log(date3.toLocaleString()); // -> 02/02/2020, 20:20:00
console.log(date3.toISOString()); // -> 2020-02-02T19:20:00.000Z
console.log(date3.toUTCString()); // -> Sun, 02 Feb 2020 19:20:00 GMT
console.log(date4.toLocaleString()); // -> 02/02/2020, 21:20:00
console.log(date4.toISOString()); // -> 2020-02-02T20:20:00.000Z
console.log(date4.toUTCString()); // -> Sun, 02 Feb 2020 20:20:00 GMT
console.log(date3.getTime()); // -> 1580671200000
console.log(date4.getTime()); // -> 1580674800000
console.log(date4.getTime() - date3.getTime()); // -> 3600000
// 3.1.3 Boolean

let boolObj1 = new Boolean;
let boolObj2 = new Boolean(true);
let str1 = boolObj1.toString();
let bool2 = boolObj2.valueOf();
console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${ bool2}`); // -> bool2 : boolean : true

let bool1 = false;
let str1 = bool1.toString();
let bool2 = bool1.valueOf();
console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${ bool2}`); // -> bool2 : boolean : false

let bool1 = Boolean(false);
let bool2 = Boolean(1);
let bool3 = Boolean("");
console.log(`bool1 : ${typeof bool1} : ${bool1}`); // -> bool1 : boolean : false
console.log(`bool2 : ${typeof bool2} : ${bool2}`); // -> bool2 : boolean : true
console.log(`bool3 : ${typeof bool3} : ${bool3}`); // -> bool3 : boolean : false
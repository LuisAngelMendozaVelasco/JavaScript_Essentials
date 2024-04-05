// 3.3.9 Constructor and test method

let re1 = new RegExp('c.t');
let re2 = /c.t/;
console.log(re1.test("cat")); // -> true
console.log(re2.test("cut")); // -> true
console.log(re2.test("ct")); // -> false
// 3.3.11 String constructor methods using RegExp

// String -> match, search, replace, ...
let re = /c.t/;
let str = "dog and cat";
console.log(str.match(re)); // -> ["cat", index: 8, input: "dog and cat", groups: undefined]
console.log(str.search(re)); // -> 8
console.log(str.replace(re, 'unicorn')); // -> dog and unicorn
console.log(str); // -> dog and cat
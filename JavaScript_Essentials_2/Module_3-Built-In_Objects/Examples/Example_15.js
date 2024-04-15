// 3.1.16 Copying substrings

let text = "One, two, three, one, two, three.";
console.log(text.substr(0, 8)); // -> One, two
console.log(text.substr(10)); // -> three, one, two, three.
console.log(text.substr(-6)); // -> three.
console.log(text.substr(-6, 2)); // -> th

console.log(text.substring(5, 8)); // -> two
console.log(text.substring(5)); // -> two, three, one, two, three.
console.log(text.substring(-11, 8)); // -> One, two

console.log(text.slice(0,3)); // -> One
console.log(text.slice(5)); // -> two, three, one, two, three.
console.log(text.slice(-11)); // -> two, three.
console.log(text.slice(-11, -8)); // -> two
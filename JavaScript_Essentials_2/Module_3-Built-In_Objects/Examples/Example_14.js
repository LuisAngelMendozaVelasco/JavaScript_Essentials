// 3.1.15 Searching for substrings

let text = "One, two, three, one, two, three.";
console.log(text.includes("two")); // -> true
console.log(text.includes("four")); // -> false
console.log(text.indexOf("two")); // -> 5
console.log(text.indexOf("four")); // -> -1
console.log(text.lastIndexOf("two")); // -> 22
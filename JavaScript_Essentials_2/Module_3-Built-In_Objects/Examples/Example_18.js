// 3.1.19 Comparing strings

console.log("a" < "b"); // -> true
console.log("abc" < "acd"); // -> true
console.log("b" < "acd"); // -> false

console.log("4" < "5"); // -> true
console.log("2" < "12"); // -> false
console.log("34" < "332"); // -> true

console.log("brettesnes" < "Sundsfjord"); // -> false
console.log("Brettesnes" < "Sundsfjord"); // -> true

console.log("Ørnes" < "Sundsfjord"); // -> false

console.log("Ørnes".localeCompare("Sundsfjord", "nn")); // -> -1
console.log("Ørnes".localeCompare("Brettesnes", "nn")); // -> 1
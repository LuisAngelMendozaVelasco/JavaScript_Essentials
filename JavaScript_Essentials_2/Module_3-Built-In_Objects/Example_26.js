// 3.2.4 Merging arrays

let array1 = [10, 20, 30];
let array2 = ["cat", "dog"];
let array3 = array1.concat(array2); // -> [10, 20, 30, "cat", "dog"];
console.log(array1.length); // -> 3
console.log(array2.length); // -> 2
console.log(array3.length); // -> 5
console.log(array3[0]); // -> 10
console.log(array3[3]); // -> "cat"
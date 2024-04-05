// 3.2.21 The Set constructor

let emptySet = new Set(); // -> {}
console.log(emptySet.size); // -> 0
let petsSet = new Set(["cat", "dog", "cat"]); // -> {"cat", "dog"}
console.log(petsSet.size); // -> 2
// 3.2.28 Checking the presence of the element

let petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(petsMap.has("dogs")); // -> true
console.log(petsMap.has("sharks")); // -> false
console.log(petsMap.has(1)); // -> false
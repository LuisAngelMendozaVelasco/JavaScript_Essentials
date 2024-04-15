// 3.2.19 The spread operator in arrays

let array1 = [100, 200, 300];
let array2 = [1000, 2000];
let array3 = [10, 20, ...array1, 500, ...array2]; //-> [10, 20, 100, 200, 300, 500, 1000, 2000]

let testFn = (a, b, c, d) => a + b + c + d;
let array = [10, 20, 30, 40];
console.lof(testFn(...array)); // -> 100
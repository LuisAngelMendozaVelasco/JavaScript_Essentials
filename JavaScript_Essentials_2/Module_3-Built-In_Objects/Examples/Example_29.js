// 3.2.7 Adding and removing items without using methods

let array1 = [10, 20, 30]; // -> [10, 20, 30]
array1[3] = 100; // -> [10, 20, 30, 100]
array1[5] = 1000; // -> [10, 20, 30, 100, undefined, 1000]
delete array1[1]; // -> [10, undefined, 30, 100, undefined, 1000]
console.log(array1[1]); // -> undefined
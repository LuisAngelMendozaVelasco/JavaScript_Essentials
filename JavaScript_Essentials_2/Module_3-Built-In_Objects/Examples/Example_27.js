// 3.2.5 Adding and removing items – push and unshift

let array1 = [10, 20, 30]; // -> [10, 20, 30]
array1.push(100); // -> [10, 20, 30, 100]
array1.push(50, "dog"); // -> [10, 20, 30, 100, 50, "dog"]
array1.unshift("cat", 90, 80); // -> ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"]
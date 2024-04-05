// 3.2.13 Reducing the array

let numbers = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
let sum = numbers.reduce((accumulator, item) => accumulator + item);
console.log(sum); // -> 380

let anotherSum = numbers.reduce((accumulator, item) => accumulator + item, 1000);
console.log(anotherSum); // -> 1380

let strangeObj = numbers.reduce((accumulator, item, index) => {
    accumulator[item] = index;
    return accumulator;
} , {});
console.log(strangeObj); // -> {10: 0, 20: 1, 30: 2, 50: 3, 80: 4, 90: 5, 100: 6}
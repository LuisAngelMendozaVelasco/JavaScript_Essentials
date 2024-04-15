// 3.2.12 Sorting

let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let numbers = array1.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numbers[0]); // -> 90
numbers.sort((first, second) => {
    if( first < second) {
        return -1
    } else if(first == second) {
        return 0;
    } else {
        return 1;
    }
}); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]); // -> 10

numbers.sort((first, second) =>  first - second); [10, 20, 30, 50, 80, 90, 100]
// 3.2.8 Walking through the array elements

let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
for(let index=0; index< array1.length; index++) {
    console.log(`${index} : ${array1[index]}`); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
}

function toConsole(item, index, array) {
    console.log(`${index} : ${item}`);
}
array1.forEach(toConsole); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog

array1.forEach(function (item, index) {
    console.log(`${index} : ${item}`); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
});

array1.forEach((item, index) => {
    console.log(`${index} : ${item}`); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
});

array1.forEach((item, index) => console.log(`${index} : ${item}`)); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
/*
"push"

The push method places the element given as its argument at the end of the array. The length of the array is increased by 1, and the new element is inserted on the 
right (it has the largest index of all elements).
*/

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

names.push("Amelia");
console.log(names.length); // -> 5
console.log(names); // - > ["Olivia", "Emma", "Mateo", "Samuel", "Amelia"]
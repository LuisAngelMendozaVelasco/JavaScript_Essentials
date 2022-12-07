/*
"concat"

The concat method creates a new array by attaching elements from the array given as an argument to the original array elements. The method changes neither 
the original array nor the array specified as an argument.
*/

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
let otherNames = ["William", "Jane"];
let allNames = names.concat( otherNames);

console.log(names); // -> ["Olivia", "Emma", "Mateo", "Samuel"]
console.log(otherNames); // -> ["William", "Jane"]
console.log(allNames); // -> ["Olivia", "Emma", "Mateo", "Samuel", "William", "Jane"]
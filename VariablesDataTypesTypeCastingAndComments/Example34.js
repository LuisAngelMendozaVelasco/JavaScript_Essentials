/*
"unshift"

The unshift method works similarly to push, the difference being that a new element is added to the beginning of the array. The array length is increased by 1, 
all the old elements are moved to the right and the new element is placed in the empty space that has been created at the beginning of the array. The index of the 
new element is 0.
*/

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Victor")); // -> -1
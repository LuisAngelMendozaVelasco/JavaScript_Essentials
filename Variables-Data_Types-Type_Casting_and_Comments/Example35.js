/////////
// pop //
/////////

/*
The pop method allows you to remove the last element from the array. As a result of its execution, the element with the largest index is returned, while at the same 
time it is removed from the original array. The length of the array is obviously reduced by 1.
*/

let names= ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

let name = names.pop();
console.log(names.length); // -> 3
console.log(name); // -> Samuel
console.log(names); // -> ["Olivia", "Emma", "Mateo"]
///////////
// shift //
///////////

/*
The shift method works similarly to pop, only this time we remove the element from the beginning of the array (with the index 0). The removed element is returned 
by the method, and all other elements are shifted to the left, filling the empty space. The length of the original array is reduced by 1.
*/

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

let name = names.shift();
console.log(names.length); // -> 3
console.log(name); // -> Olivia
console.log(names); // -> ["Emma", "Mateo", "Samuel"]
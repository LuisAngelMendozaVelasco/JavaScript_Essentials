/*
"indexOf"

The indexOf method is used to search the array to locate a given value. If the value is found (the element is in the array), its index (position) will be returned. 
The method returns -1 if the element is not found. If there is more than one element with the same value in the array, the index of the first element is returned.
*/

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Victor")); // -> -1
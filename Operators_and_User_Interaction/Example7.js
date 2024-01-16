///////////////////////////////////
// Compound Assignment Operators //
///////////////////////////////////

/*
Just like arithmetic operators, binary logical operators can be used in combination with the assignment operator, 
creating a logical AND assignment &&= and a logical OR assignment ||=.
*/

// The instruction a &&= false means exactly the same as a = a && false.
let a = true;

console.log(a); // -> true
a &&= false;
console.log(a); // -> false

// This time, the operation b ||= true is interpreted as b = b || true.
let b = false;

console.log(b); // -> false
b ||= true;
console.log(b); // -> true
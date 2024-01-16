//////////////////////////
// Conditional operator //
//////////////////////////

/*
It allows us to perform one of two actions based on the value of the first operand. Most often it is used as an alternative to the if ... else instruction when you 
want to assign one of two values to a variable, depending on a certain condition. In such cases, it is simply shorter and a bit more readable than the if ... else 
construction.

As a reminder: the first operand (before the question mark) is the condition to verify, the second operand (between the question mark and the colon) will be returned 
if the condition is true, and the third operand (after the colon) if the condition is false.
*/

let price = 100;
let shippingCost = price > 50 ? 0 : 5;

console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0
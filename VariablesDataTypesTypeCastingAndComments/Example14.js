/*
"Primitive data types"

In JavaScript, there are six primitive (or simple) data types: Boolean, Number, BigInt, String, Symbol, and undefined. Additionally, the primitive null value is 
also treated as a separate type. The primitive, as we have already said, is a type of data whose values are atomic. This means that the value is one, indivisible element.
*/

/*
"Boolean"

The Boolean is a logical data type. It can only take one of two values: true or false. It’s mainly used as a conditional expression needed for deciding what part of 
the code should be executed, or how long something should be repeated.

Booleans are also used as what is commonly referred to as a flag, a variable that signals something that can be either present or absent, enabled or disabled, etc. 
Like any other variable, booleans should have clear and informative names. It’s not mandatory, but we can often see that boolean flag names are prefixed with "is", 
to show the intent of checking this for true/ false values.
*/
let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;

console.log(false); // -> false
console.log(typeof false); // -> boolean
console.log(isDataValid); // -> true
console.log(typeof isDataValid); // -> boolean

/*
We can perform, without conversion (i.e. change to another type) logical operations on boolean values, some from mathematics, such as NOT, 
AND, and OR (the symbols !, && and || correspondingly).
*/
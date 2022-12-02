/*
"Arithmetic operators"

They mathematical operations, and they accept numerical values and variables. All arithmetic operators, except addition, will try to implicitly convert values to the 
Number type before performing the operation.

The addition operator will convert everything to a String if any of the operands is a String type, otherwise it will convert them to a Number like the rest of the 
arithmetic operators. The order of the operations is respected in JavaScript like in math, and we can use parentheses as in math to change the operation order if needed.

In general, it is a good habit to use parentheses to force the precedence and order of operations, not just arithmetic. The precedence of operations performed by 
the interpreter will not always be as intuitive as the precedence of arithmetic operations known from mathematics.
*/

console.log(2 + 2 * 2); // -> 6
console.log(2 + (2 * 2)); // -> 6
console.log((2 + 2) * 2); // -> 8

/*
The basic binary arithmetic operators are the addition +, subtraction -, multiplication *, division /, division remainder % and power **. Their operation is analogous 
to what we know from mathematics.
*/
const x = 5;
const y = 2;

console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("division remainder :", x % y); // -> 1
console.log("exponent: ", x ** y); // -> 25
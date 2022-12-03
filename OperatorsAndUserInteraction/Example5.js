/*
"Compound Assignment Operators"

Binary arithmetic operators can be combined with the assignment operator, resulting in the addition assignment +=, the subtraction assignment -=, the multiplication 
assignment *=, the division assignment /=, the remainder assignment %=, and the power assignment **=.
Each of these operators takes a value from the variable to which the assignment is to be made (the left operand) and modifies it by performing an arithmetic operation 
using the right operand value. The new value is assigned to the left operand. 

    x += 100;

could be written down in the form:

    x = x + 100;
*/

let x = 10;

x += 2;
console.log(x); // -> 12
x -= 4;
console.log(x); // -> 8
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4
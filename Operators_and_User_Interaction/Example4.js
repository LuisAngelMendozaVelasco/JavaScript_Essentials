/////////////////////////////////////////////
// Unary increment and decrement operators //
/////////////////////////////////////////////

/*
Among the arithmetic operators, we also have at our disposal the unary increment ++ and decrement -- operators, in both prefix and postfix versions. 
They allow us to increase (increment) or decrease (decrement) the value of the operand by 1.

These operators in the postfix version (i.e. the operator is on the right side of the operand) performs the operation by changing the value of the variable, 
but returns the value before the change. The prefix version of the operator (i.e. the operator is placed before the operand) performs the operation and returns 
the new value.

    console.log(n1++);

is interpreted as:

    console.log(n1);
    n1 = n1 + 1;

while the line:

    console.log(++n1);

means the same as:

    n1 = n1 + 1;
    console.log(n1);
*/

let n1 = 10;
let n2 = 10;

console.log(n1); // -> 10
console.log(n1++); // -> 10
console.log(n1); // -> 11

console.log(n2); // -> 10
console.log(++n2); // -> 11
console.log(n2); // -> 11

let n3 = 20;
let n4 = 20;

console.log(n3); // -> 20
console.log(n3--); // -> 20
console.log(n3); // -> 19

console.log(n4); // -> 20
console.log(--n4); // -> 19
console.log(n4); // -> 19
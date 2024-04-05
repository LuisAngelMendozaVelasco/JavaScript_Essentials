//////////////////////////////////////////////
// Logical operators and non-Boolean values //
//////////////////////////////////////////////

/*
As long as operands are of the type Boolean, we can easily use logical operators. But those operators can also be used with different data types. The easiest case 
is logical NOT. First, the operand is temporarily converted to a Boolean value and only then it is treated with the appropriate operator action 
(i.e. a true value is converted to false, and vice versa). Therefore, the NOT operator will always return either false or true. Often, double negation is used 
to convert any type to Boolean.
*/

let nr = 0;
let year = 1970;
let name = "Alice";
let empty = "";

console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!name); // -> false
console.log(!empty); // -> true
console.log(!!nr); // -> false
console.log(!!name); // -> true

/*
The above is slightly different for binary logical operators (i.e. AND and OR). They don't return a Boolean value. In reality, they return its first or second operand. 
The AND operator will return the first operand if it evaluates to false, and the second operand otherwise. The OR operator will return its first operand if it evaluates 
to true, and the second operand otherwise. Evaluation is simply an attempt to convert an operand to a Boolean-type value.
*/

console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string

console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob

/*
Both operators also use short-circuit evaluation.

So, if the first operand of AND is false, it will be returned, and no other check will be performed.

Conversely, if the first operand of OR is true, it will be returned, and no other check will be made. This quickens code execution.
*/

let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0

/*
Logical operators are usually used together with conditional operators, and they are especially useful in conditional instructions (decision making) and in loops 
(loop-ending conditions). 
*/
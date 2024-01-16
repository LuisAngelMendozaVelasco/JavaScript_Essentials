//////////////////////////
// Comparison operators //
//////////////////////////

/*
Comparison operators are used to check the equality or inequality of values. All comparison operators are binary, and all of them return a logical value representing 
the result of the comparison, true or false.

As with other operators, JavaScript will try to convert the values that are being compared if they are of different types. It makes sense to check equality, or which 
is greater, using numeric representation, and JavaScript will in most cases convert types to a Number before comparison. There are two exceptions to this, strings and 
the identity (strict equality) operator. Strings are compared char by char (precisely Unicode character by Unicode character using their values).
*/

/*
To check if the operands are equal, we can use either the identity (strict equality) operator === or the equality operator ==.

The first is more restrictive, and in order to return true, the operands must be identical (i.e. they must be equal and of the same type).
*/
console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false

/*
The equality operator requires that they are only equal, and their types are not compared. So if the operands are of different types, the interpreter will try to 
convert them to numbers, for example, false will convert to 0, true to 1, undefined to NaN, null to 0, 10n to 10 and "123" to 123, etc.

Note that if any of the operands has a NaN value (or has been converted to NaN, e.g. with undefined), the equality operator will return false.

Remember! Use the identity operator unless We intentionally allow for a positive comparison between the different types.
*/
console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Alice" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false

/*
There are also complementary operators to those just demonstrated – the nonidentity operator !== and the inequality operator !=. The first returns true if the operands 
are not identical, in other words, they are equal but of different types, or they are simply different. The second returns true if the operands are different.
*/
console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 !=  false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true

/*
We also have operators that allow us to check if one of the operands is bigger than >, smaller than <, bigger than or equal to >=, and smaller than or equal to <=. 
These operators work on any type of operand, but it makes sense to use them only on numbers or values that will convert correctly to numbers.
*/
console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "100"); // -> true
console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true
console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <=  20); // -> true

/*
We can also use them to compare strings that do not represent numbers, but the algorithm of this comparison is quite complex, and the comparison itself is not very 
useful. By way of simplification, single characters of both strings are tested on the same positions. It is assumed that the values of the single characters correspond 
to their positions in the alphabet (the letter b has a higher value than the letter a). Upper-case letters have lower values than lower-case letters, and digits have 
even lower values.
*/
console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true
console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true
console.log("ab" < "ab4"); // -> true

// Note: the symbol => exists in JavaScript, but is not an operator – we use it in the construction of arrow functions.
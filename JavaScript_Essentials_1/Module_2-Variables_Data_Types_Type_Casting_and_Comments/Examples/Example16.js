////////////
// BigInt //
////////////

/*
The BigInt type is not used too often. It allows us to write integers of virtually any length. For almost any normal numerical operations, the Number type is enough, 
but from time to time we need a type that can handle much bigger integers.

We can use mathematical operations on BigInts in the same way as on Numbers, but there is a difference when dividing. As the BigInt is an integer type, the division 
result will always be rounded down to the nearest whole number.

BigInt literals are numbers with the …n suffix.
*/

let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big); // -> 1234567890000000000000n
console.log(typeof big); // -> bigint

console.log(big2); // -> 1n
console.log(7n / 4n); // -> 1n

// We cannot use other types in arithmetic operations on BigInts, that is, we cannot add a BigInt and a Number to each other (this will generate an error).
let big3 = 1000n + 20; // -> Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

/*
The BigInt does not have its own equivalent of Infinity or NaN values. In the case of the Number type, such values appear when dividing by 0 (Infinity result) 
or trying to perform an arithmetic action on a value that is not a number (NaN result). In the case of the BigInt type, such actions will generate an error.
*/
let big4 = 1000n / 0n; // -> Uncaught RangeError: Division by zero
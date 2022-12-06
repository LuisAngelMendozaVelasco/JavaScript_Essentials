/*
"Conversion to BigInt"

In order for conversions to a BigInt to succeed, we require a Number or String representing a number as a value to be converted. Values for conversion can be 
given in the default decimal form, as well as in hexadecimal, octal, or binary form. This applies both to the situation where we give the Number and String 
literals as arguments (or variables containing data of those types). We can also use exponential notation, but only for Number arguments. Unlike other conversions, 
conversion to a BigInt will throw an error, and will stop the program when unable to convert a given value.
*/

console.log(BigInt(11)); // -> 11n
console.log(BigInt(0x11)); // -> 17n
console.log(BigInt(11e2)); // -> 1100n

console.log(BigInt(true)); // -> 1n

console.log(BigInt("11")); // -> 11n
console.log(BigInt("0x11")); // -> 17n

console.log(BigInt(null)); // -> Uncaught TypeError: Cannot convert null to a BigInt

console.log(BigInt(undefined)); // -> Uncaught TypeError: Cannot convert undefined to a BigInt

console.log(BigInt(NaN)); // -> Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer
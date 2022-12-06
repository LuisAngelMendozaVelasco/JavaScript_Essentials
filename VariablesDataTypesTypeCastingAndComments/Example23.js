/*
"Conversion to Number"

Conversion to a number is not as obvious as conversion to a string. It works as expected for strings that represent actual numbers, like "14", "-72.134", or 
strings that represent numbers in scientific notation, like "2e3", or special number values like "NaN" or "Infinity".

However, the string can also contain numbers in hexadecimal, octal, and binary format. They must be preceded by 0x, 0o, or 0b respectively. For any string that 
cannot be converted to a special value, NaN (not a number) is returned. A BigInt can also be converted to a Number, but we need to remember that a BigInt can store 
much bigger values than a Number, so for large values, part of them can be truncated or end up being imprecise. The Boolean true is converted to 1, and 
false to 0 – this is common for many programming languages. An attempt to convert an undefined value will result in NaN, while null will be converted to 0.
*/

console.log(Number(42)); // -> 42

console.log(Number("11")); // -> 11
console.log(Number("0x11")); // -> 17
console.log(Number("0o11")); // -> 9
console.log(Number("0b11")); // -> 3
console.log(Number("12e3")); //  -> 12000
console.log(Number("Infinity"));// -> Infinity
console.log(Number("text")); // -> NaN

console.log(Number(14n)); // -> 14
console.log(Number(123456789123456789123n)); // - >  123456789123456800000

console.log(Number(true)); // -> 1
console.log(Number(false)); // -> 0

console.log(Number(undefined)); //  -> NaN

console.log(Number(null));// -> 0
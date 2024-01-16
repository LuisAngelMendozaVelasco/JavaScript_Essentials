////////////
// Number //
////////////

/*
This is the main numeric type in JavaScript that represents both real numbers (e.g. fractions) and integers. The format in which the data of this type is stored in 
the memory means that the values of this type are sometimes approximate (especially, but not only, very large values or some fractions). It is assumed, among other 
things, that in order to ensure the correctness of calculations, the integer values should be limited in JavaScript to the range from -(253 – 1) to (253 – 1).

Numbers allow for all typical arithmetic operations, like addition, subtraction, multiplication, and division.
*/

const year = 1991;
let delayInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;

console.log(year); // -> 1991;
console.log(typeof year); // -> number;

/*
Numbers in JavaScript are usually presented in decimal form, which we are used to in everyday life. However, if a literal describing a number is preceded by an 
appropriate prefix, we can present it in hexadecimal (0x…), octal (0o...) or binary (0b...) form. We can also write numbers in exponential form, so for example, 
instead of 9000, we can write 9e3, and instead of 0.00123, we can write 123e-5.
*/
let a = 10; // decimal - default 
let b = 0x10; // hexadecimal 
let c = 0o10; // octal 
let d = 0b10; // binary 
 
console.log(a); // -> 10 
console.log(b); // -> 16 
console.log(c); // -> 8 
console.log(d); // -> 2 

let x = 9e3;
let y = 123e-5;

console.log(x); // -> 9000
console.log(y); // -> 0.00123

/*
In addition to regular numbers in JavaScript, we use three additional special values, which are: Infinity, -Infinity and NaN (not a number). NaN is not so much a 
numerical value as a notification that some arithmetic action (or mathematical function) could not be performed because the argument is either not a number, or cannot 
be converted to a number.
*/
let e = 1 / 0;
let f = -Infinity;

console.log(e); // -> Infinity
console.log(f); // -> -Infinity
console.log(typeof e); // -> number
console.log(typeof f); // -> number

let s = "it's definitely not a number";
let n = s * 10;

console.log(n); // -> NaN
console.log(typeof n); // -> number
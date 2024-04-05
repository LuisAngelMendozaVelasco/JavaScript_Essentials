///////////
// Tasks //
///////////

////////////
// Task 1 //
////////////

/*
Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals 
and constructor functions.
*/
let b1 = true;
let b2 = Boolean(true);
let n1 = 100;
let n2 = Number(200);
let bi1 = 100n;
let bi2 = BigInt(200);
let s1 = "Hello";
let s2 = String("Hello");
let u1 = undefined;

////////////
// Task 2 //
////////////

/*
Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single 
console.log call, e.g. in the following form: 1000 [number].
*/
console.log(`${b1} [${typeof b1}]`); // -> true [boolean]
console.log(`${b2} [${typeof b2}]`); // -> true [boolean]
console.log(`${n1} [${typeof n1}]`); // -> 100 [number]
console.log(`${n2} [${typeof n2}]`); // -> 200 [number]
console.log(`${bi1} [${typeof bi1}]`); // -> 100 [bigint]
console.log(`${bi2} [${typeof bi2}]`); // -> 200 [bigint]
console.log(`${s1} [${typeof s1}]`); // -> Hello [string]
console.log(`${s2} [${typeof s2}]`); // -> Hello [string]
console.log(`${u1} [${typeof u1}]`); // -> undefined [undefined]

////////////
// Task 3 //
////////////

// Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?
let b = Boolean( BigInt(Number("1234")));

console.log(`${b} [${typeof b}]`); // -> true [boolean]

////////////
// Task 4 //
////////////

// Try adding two values of the same type and check the result type. Try it for all primitive types.
let b = true + false;
let n = 100 + 200;
let bi = 100n + 200n;
let s = "He" + "llo";
let u = undefined + undefined;

console.log(`${b} [${typeof b}]`); // -> 1 [number]
console.log(`${n} [${typeof n}]`); // -> 300 [number]
console.log(`${bi} [${typeof bi}]`); // -> 300 [bigint]
console.log(`${s} [${typeof s}]`); // -> Hello [string]
console.log(`${u} [${typeof u}]`); // -> NaN [number]

////////////
// Task 5 //
////////////

// Try adding two values of different types and check the results.
// let b2 = true + 100n; // -> error!
let b3 = true + "100"; 
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200; // -> error!
// let bi2 = 100n + true; // -> error!
let bi3 = 100n + "200"; 
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

console.log(`${b1} [${typeof b1}]`); // -> 101 [number]
// console.log(`${b2} [${typeof b2}]`);
console.log(`${b3} [${typeof b3}]`); // -> true100 [string]
// console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`); // -> 101 [number]
console.log(`${n3} [${typeof n3}]`); // -> 100200 [string]
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
console.log(`${bi3} [${typeof bi3}]`); // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`); // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`); // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`); // -> 100true [string]
console.log(`${s4} [${typeof s4}]`); // -> abc200 [string]
console.log(`${s5} [${typeof s5}]`); // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`); // -> abctrue [string]

////////////
// Task 6 //
////////////

// Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).
const str1 = 42 + + "1";
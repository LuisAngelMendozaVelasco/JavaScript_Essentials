//////////////////////////
// Implicit Conversions //
//////////////////////////

/*
Conversions can also happen automatically, and they happen all the time. 

when we try to perform an addition when one of the arguments is a string, JavaScript will convert the rest of the arguments to a string as well. Subtraction with a 
string, however, doesn't make much sense, so in that case JavaScript converts everything to Numbers.
*/

const str1 = 42 + "1";
console.log(str1); // -> 421
console.log(typeof str1); // -> string

const str2 = 42 - "1";
console.log(str2); // -> 41
console.log(typeof str2); // -> number
/*
"String"

The String type represents a sequence of characters forming a piece of text. Common operations on texts include concatenation, extraction of the substring, and 
checking the length of the string. Strings are extensively used in programming and even more so in web development, as both HTML and a big part of Internet content 
is text.

The most common use of text in web development includes:
    *links and paths to resources;
    *tokens;
    *checking user-filled forms and input;
    *dynamic content generation

Strings, like other primitives, are immutable, so when we want to change even one letter in a string, in reality, we create a new string.
*/

/*
We used quotation marks to indicate that a given text is to be treated as a string (i.e. String type). String literals can be created using single or double quotes, 
as long as both beginning and end quote characters match up.
*/
let country = "Malawi";
let continent = 'Africa';

console.log(country); // -> Malawi
console.log(typeof country); // -> string
console.log(continent); // -> Africa
console.log(typeof continent); // -> string

/*
If we use double quotes to mark a string, we can place single quotes inside the string, and they will be treated as ordinary characters. This will also work in 
the opposite situation (i.e. placing double quotes between the single quotes).
*/
let message1 = "The vessel 'Mars' called at the port.";
let message2 = 'Cyclone "Cilida" to pass close to Mauritius.';

console.log(message1); // -> The vessel 'Mars' called at the port.
console.log(message2); // -> Cyclone "Cilida" to pass close to Mauritius.

/*
If we want to put a single or double quote inside the string, we can also use the escape character – backslash. A quote mark preceded by the \ (backslash) 
character will be interpreted as ordinary characters that are part of our string, not parts of a literal construction. The backslash itself, if it is to be treated 
as an ordinary character (not a control character), must also be preceded by ... an escape character (i.e. a backslash).
*/
let message3 = 'The vessel \'Mars\' called at the port.';
let message4 = "Cyclone \"Cilida\" to pass close to Mauritius.";

console.log(message3); // -> The vessel 'Mars' called at the port.
console.log(message4); // -> Cyclone "Cilida" to pass close to Mauritius.

let path = "C:\\Windows";
console.log(path); // -> C:\Windows

/*
Trying to perform arithmetic operations on String type values, such as subtraction, multiplication, or division, will usually end in an error. More precisely, 
the NaN value will be returned as a result of the action.

Seeing the arithmetic operators -, *, or \, the JavaScript interpreter tries to interpret the given values as numbers, or convert them into numbers. So if the 
character strings consists of digits, the automatic conversion will be successful and we will get the result of the arithmetic action as a Number type value. 
If the character string cannot be interpreted as a number (and converted) we will get the NaN result.
*/
path = "C:\\Windows" - "Windows";
console.log(path); // -> NaN

let test = "100" - "10";
console.log(test); // -> 90
console.log(typeof test); // -> number

/*
The exception is the addition operation, which will not be treated as an arithmetic one, but as an attempt to create a new string by combining two input strings.
*/
path = "C:\\" + "Windows";
console.log(path); // -> C:\Windows

test = "100" + "10";
console.log(test); // -> 10010
console.log(typeof test); // -> string

/*
A very convenient mechanism that was introduced to JavaScriptn is string interpolation. It allows us to treat a character string as a template, in which 
we can place values in selected places, such as those taken from variables. Such a literal is created using backticks (or grave accents) instead of quotation marks. 
The places where values are inserted are marked with curly brackets preceded by a $ sign.
*/
country = "Malawi";
continent = "Africa";

let sentence = `${country} is located in ${continent}.`;
console.log(sentence); // -> Malawi is located in Africa.
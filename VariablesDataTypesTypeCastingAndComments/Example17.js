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
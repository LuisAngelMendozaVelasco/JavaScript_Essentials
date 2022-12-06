/*
"Array"

An array, like an object, is a complex data type that can be used to store a data collection. Similar to an object, the stored data (the values) can be of any type. 
The difference between these structures is that in an array we only store values, without the associated names (i.e. the keys).

So how do we know which element of the array we are referring to if we cannot point to it by name? We know it because the elements of the array are ordered 
(but not necessarily sorted) and take up consecutive, numbered positions inside it. The number of the field where a particular value in the array is located is 
called an index or a position. The index starts from 0.

The easiest way to create arrays in JavaScript is to use square brackets (it’s an array literal). This way, we can create both an empty array, into which the elements 
will be inserted later, and an array containing some initial elements (which will be separated by commas). Referring to a particular array element, we use bracket 
notation – after the name of the array variable, we write a square parenthesis, in which we put the index of the element we are interested in.
*/

/*
To begin with, we have declared and initiated the days array, which contains seven shortened days of the week names. The elements of this array are data of the 
String type. Bearing in mind that the indexes (the item positions) in the array start from 0, we display three selected days of the week on the console. Then we 
change the element at index 0, and the "Sun" value is replaced by "Sunday". The last piece of code is a declaration of an empty array and an attempt to read a 
non-existent element from it.
*/
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]); // -> Sun
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri

days[0] = "Sunday";
console.log(days[0]); // -> Sunday

let emptyArray = [];
console.log(emptyArray[0]); // -> undefined
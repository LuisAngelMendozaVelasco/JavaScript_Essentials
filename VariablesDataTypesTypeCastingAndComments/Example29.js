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

/*
To add a new element to an existing array. The easiest way would be to assign a new value to a specific position using bracket notation. For the interpreter, 
it doesn't matter if there is already something in this index or not. It just places a new value in there. What's interesting is that we don't have to fill the array 
with elements one by one – we can leave empty spaces in it.

We declare an empty animals array. We then place two elements, "dog" and "cat", in positions 0 and 2, leaving position 1 empty. This, however, is not the only way 
to add new elements to the array, 
*/
let animals = [];
console.log(animals[0]); // -> undefined

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]); // -> dog
console.log(animals[1]); // -> undefined
console.log(animals[2]); // -> cat

/*
Usually, we store the same type of data in one array, but this is not required by JavaScript. So we can easily create an array containing elements of different types.
*/
let values = ["Test", 7, 12.3, false];

/*
An array element can be of any type. What is interesting is the fact that we can also store arrays as elements of the array, and we can access the elements of this 
nested array using multiple square brackets. The example shows an array declaration containing two other arrays as its components. Note that the internal arrays do 
not have to be the same length (in many other programming languages, this is required).
*/
let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia
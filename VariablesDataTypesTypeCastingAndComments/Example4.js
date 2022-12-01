/*
"Changing variable values"

Variables, as their name suggests, can store data that will vary. Changes are made by assigning a new value to the variable, which overwrites the previous one.
Variables in the JavaScript language are untyped (or, to be more precise, they are weakly and dynamically typed). This means that JavaScript will not control 
what type of value we store in the variable. The type determines the belonging of a given data to a certain set that share the same properties and on which you 
can perform the same operations. Data types vary greatly depending on the programming language. In JavaScript, the main types are number and character string.
*/

/*
We’ve declared a variable called steps. Initially, it contains the number 100, which is then changed to 120. Then we add 200 to the current contents of the variable, 
as a result of which the variable contains 320.
*/
let steps = 100;
console.log(steps); // -> 100
steps = 120; // -> 120
console.log(steps);
steps = steps + 200;
console.log(steps); // -> 320

/*
The greeting variable is initiated with a value of the string type, while the counter variable is initiated with a value of the number type.
JavaScript allows us to easily replace the greeting variable with a value whose type is different from the one originally stored there. 
*/
let greeting = "Hello!";
let counter = 100;

console.log(greeting); // -> Hello!
greeting = 1;
console.log(greeting); // -> 1

/*
JavaScript goes one step  further and not only allows us to change the types of values kept in a variable, but it also performs their implicit conversion if necessary.
The interpreter will check the type of value stored in the greeting variable and convert the value from the counter variable to the same type before performing an 
addition operation. As a result, the string "100" will be added to the "Hello!" character string and stored to the greeting variable. By the way, note that JavaScript 
interprets 100 as a number, but "100" as a string.
*/
greeting = "Hello!";
greeting = greeting + counter;
console.log(greeting); // -> Hello!100
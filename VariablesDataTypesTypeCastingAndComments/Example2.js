/*
Initializing variables

After a successful declaration, the variable should be initialized.  Initialization is done by assigning a certain value to a variable (indicated by its name). 
To assign it, we use the operator =.

We can assign to a variable: a specific value; the contents of another variable; or, for example, the result returned by a function.

Initialization can be done either together with the declaration, or separately as an independent command. It is important to enter the first value into the 
variable before trying to read, modify, or display it.

The declarations of the variables height and anotherHeight are combined with their initialization, while the variable weight is declared and initialized separately. 
The height and weight variables are initialized by providing specific values (more precisely, a number), while the anotherHeight variable receives a value read from 
the height variable.
*/

let height = 180;
let anotherHeight = height;
let weight;
console.log(height); // -> 180
console.log(anotherHeight); // -> 180
weight = 70;  
console.log(weight); // -> 70

/*
If we specify a variable name in console.log, the interpreter recognizes it and displays its value. If we put the same name in quotation marks, 
it will be treated as plain text, and displayed as such.
*/

console.log(height); // -> 180
console.log("height"); // -> height
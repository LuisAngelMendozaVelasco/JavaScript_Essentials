//////////////
// Hoisting //
//////////////

/*
Of course, good practice is always to declare variables before they are used. But the original JavaScript syntax allows for some deviations from this rule.

The JavaScript interpreter scans the program before running it, looking for errors in its syntax, among other things. It does one more thing on this occasion. 
It searches for all variable declarations and moves them to the beginning of the range in which they were declared (to the beginning of the program if they are global, 
to the beginning of the block if it is a local let declaration, or to the beginning of the function if it is a local var declaration). All this happens, of course, 
in the interpreter memory, and the changes are not visible in the code.

Hoisting is a rather complex and frankly speaking quite incoherent mechanism. Understanding it well requires the ability to freely use many JavaScript elements.

It's rather a curiosity than something practical that we will use when writing programs. 
*/

/*
We declared our variable, but in a rather strange place. Together with the declaration, we also performed initialization. This time there are no errors. 
Hoisting has worked, and the declaration has been moved by the interpreter to the beginning of the range (in this case the program).
*/
var height = 180;
console.log(height);  // -> 180
console.log(weight);  // -> undefined

var weight = 70;
console.log(weight);  // -> 70

/*
However, the attempt to display the contents of the weight variable give two different results. Hoisting only concerns the declaration, not initialization. 
So the value 70, which we assign to the weight variable, remains on the line where the original declaration is. The above example is interpreted by the JavaScript 
engine more or less in the following way:
*/
var weight;
var height = 180;

console.log(height);  // -> 180
console.log(weight);  // -> undefined
weight = 70;
console.log(weight);  // -> 70

// Hoisting unfortunately works a little differently with the let and const declarations. We will remember ALWAYS to declare variables before using them.
//////////////
// Comments //
//////////////

/*
Comments are a common thing in programming. "Commenting" may not be a key programming technique (if we can call it a technique), but it allows we to improve our 
work with the code, among other things by making it more readable. 

Comments are just plain text, totally ignored by the JavaScript interpreter, that usually serve to explain a certain piece of code, which for some reasons may not 
be fully legible. However, we cannot write them completely freely, as the interpreter will try to treat them as commands, variable names, or keywords. So JavaScript 
needs to distinguish comments from the rest of the code. In JavaScript, we have two types of comments, and both are commonly used in many programming languages, from 
the C language family to Python. They are called single-line and multi-line comments.
*/

/*
"Single-line comments"

This is the primary way to comment code. It uses a double slash character at the start of the comment that spans to the end of the line. Any code placed to the right 
of the double slash will be ignored by the interpreter. If we want to create comments in this way over several lines, we have to put // in each line separately.
*/

// This is a single-line comment.
let x = 42; // This is also a single line comment, although the part before the double slash is proper code and will be executed.

// This line and the next one will be ignored.
// x = 8;
console.log(x); // -> 42

/*
In most modern code editors, it is possible to "comment" selected code fragments using keyboard shortcuts. This means that we can place the cursor in the selected 
line of code and by pressing a specific combination of keys we can place a comment sign at the beginning of the line. Pressing the same combination again will 
"uncomment" the comment character. Usually, it is also possible to mark several lines (with a mouse, or using the arrow keys with the Shift key pressed) and place 
a comment character at the beginning of all marked lines using the same key combination.
*/
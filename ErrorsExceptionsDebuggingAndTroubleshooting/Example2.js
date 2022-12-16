/*
"The try ... catch statement"

Exceptions interrupt the program execution. The try ... catch constructionallows you to change this default action. The program will interrupt what it is currently 
doing, but it will not terminate automatically. The syntax for try...catch looks like this:
    try {
        // code to try
    } catch (error) {
        // code to run in case of an error, which throw an exception
    }

The basic premise is simple: if we have a piece of code that can possibly go wrong, we can enclose it in the try clause. JavaScript will try to execute this code, and 
if any error occurs and an exception is thrown, the code inside the catch block will be executed; if the try code is executed without errors, then the catch block is 
ignored. After executing the commands from the catch block, the program will continue to run from the first instruction outside the try ... catch statement.

Note that the catch keyword is followed by parentheses containing the parameter error. This is a variable name that will hold information about the error that was 
caught, and it can have any valid name, but the names error, err, or just e, are commonly used. In the case of an exception thrown by JavaScript, the error object will 
contain information about the error type, and is converted to a string to be logged or processed in any way the developer needs.
*/

/*
The statement that produces ReferenceError is now inside the try block. The result is that our code is no longer stopped by errors. And we can react to it in the catch 
block. In this example, we log a message about the error. The first error that is thrown in the try block will always be caught, execution will jump to the catch block, 
and no further errors in the try block will be caught. What's important is that after leaving the catch block, the program will continue to work normally (in our case 
it will write “We handled the exception!” on the console).

Note that try...catch will not work on a SyntaxError. If the JavaScript engine detects a syntax error, it will not allow you to run the program. If the program has not 
been run, it is rather hard to imagine that it could react somehow to what has happened.
*/
try {
    let a = b;
} 
catch (error) {
    console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!
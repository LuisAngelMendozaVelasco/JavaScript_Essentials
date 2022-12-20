/*
"Conditional exception handling"

Sometimes we want to be able to react differently to specific types of errors inside the catch block. We can do this by using the operator instanceof. For now, it’s 
enough to know how we can use it when handling errors. The syntax for the instanceof operator looks like this:

    variable instanceof type

If, for example, we receive an error in the catch block (passed as an error argument), we can check whether it is of the ReferenceError type as follows:

    let result = error instanceof ReferenceError;

The operator instanceof returns a boolean, so this expression will return true if the error variable does indeed hold a type ReferenceError, and false if it doesn’t. 
We can use if...else or switch statements to then execute different code in the case of different errors if needed.

The operator instanceof returns a boolean, so this expression will return true if the error variable does indeed hold a type ReferenceError, and false if it doesn’t. 
We can use if...else or switch statements to then execute different code in the case of different errors if needed.
*/

/*
In this example, we can see how we can react in a specific way only to the selected type of error. It’s important to know that any variable that gets declared using the 
let keyword inside a try block is not accessible in the catch block (nor in the finally block).
*/
let a = -2;
try {
    a = b;
} 
catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
        a = -2;
    } 
    else {
        console.log("Other error - " + error);
    }
}
console.log(a); // -> -2
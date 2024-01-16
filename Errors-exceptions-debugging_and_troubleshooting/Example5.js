///////////////////////////////////////
// The finally statement - continued //
///////////////////////////////////////

/*
The console.log call from the finally block will be executed, although this doesn't change the fact that program execution will be stopped at this second 
ReferenceError, as it isn’t caught.
*/
let a = 10;

try {
    a = b; // First ReferenceError
} 
catch (error) {
    console.log(b); // Second ReferenceError

} 
finally {
    console.log("Finally!"); // -> Finally!
}

/*
Try...catch...finally blocks can be nested, so we can use a whole try...catch block inside another try...catch block. This is useful when we expect multiple errors to 
occur and need to handle them all. In this example, we catch the exception inside the catch block by placing the code inside another try...catch statement.
*/
a = 10;

try {
    a = b; // First ReferenceError
} 
catch (error) {
    try {
        console.log(b); // Second ReferenceError
    } 
    catch {
        console.log("Second catch!"); // -> Second catch!
    }
} 
finally {
    console.log("Finally!"); // -> Finally!
}
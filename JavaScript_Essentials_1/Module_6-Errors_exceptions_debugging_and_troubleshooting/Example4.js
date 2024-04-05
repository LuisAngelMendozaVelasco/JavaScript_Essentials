///////////////////////////
// The finally statement //
///////////////////////////

/*
The last optional block of the try statement is the finally block. It can be used with or without the catch block, and it’s always executed after try and catch blocks, regardless of whether any errors are thrown. The syntax for try ... finally looks like this:
    try {
        // code to try
    } finally {
        // this will be always executed
    }
*/

/*
The new value has been stored, without calling an error, in variable a. Then the content of the finally block is executed, i.e. the new value of our variable is 
displayed on the console. The program continues after leaving the finally block, displaying our variable again.
*/
let a = 10;

try {
    a = 5;
} 
finally {
    console.log(a); // -> 5
}

console.log(a); // -> 5

// Let's refer to a non-existent variable, b. This will generate a ReferenceError error.
a = 10;

try {
    a = b; // ReferenceError: b is not defined
} 
finally {
    console.log(a); // -> 10
}

console.log(a);
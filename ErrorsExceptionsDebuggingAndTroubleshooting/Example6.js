/*
"The throw statement and custom errors"

There are several reasons why we generate our own exceptions. The easiest situation to imagine is when we write a function of our own, which should signal the 
incorrect data that has been passed to it.

To throw an exception, we use the throw instruction. It is followed by any value that will be treated as an exception. It can be, for example, a number, or one of the 
ready-made error objects (e.g. RangeError).

An exception that we throw will cause the program to react in the same way as the original JavaScript exceptions (i.e. it will stop its execution). That is, unless we 
throw it inside the try block to handle it. 
*/

/*
The exception is caught and handled in the catch block, and doesn’t interrupt further execution.
*/
console.log("start"); // -> start
try {
    throw 100;
} 
catch (error) {
    console.log(error); // -> 100
}
console.log("end"); // -> end
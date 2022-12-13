/*
"The return statement"

Functions that have been called execute a sequence of instructions contained in their body. The result of this execution may be a certain value that we may want to 
store in some variable. The return keyword comes to help us in this case. 
    *First, it causes the function to end exactly where this word occurs, even if there are further instructions.
    *Second, it allows us to return a given value from inside the function to the place where it was called.
*/

/*
The showMsg function contains only two console.logs separated by return.

As expected, the call ends up displaying only the first message "message 1", then the return interrupts the function. In practice, using return here would not make much 
sense. It causes the console.log("message 2") to never be called. So it would be easier not to write a second console.log call at all.

However, using the conditional instructions, we can, for example, react to errors inside the function, and in certain situations interrupt the function immediately.
*/
function showMsg() {
    console.log("message 1");
    return;
    console.log("message 2");
}

showMsg(); // -> message 1
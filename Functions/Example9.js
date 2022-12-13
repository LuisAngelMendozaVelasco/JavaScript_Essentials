/*
"Recursion"

A recursion is a mechanism that allows to simplify the formal notation of many mathematical functions and present them in an elegant form. We can also successfully use 
recursion in programming.
*/

/*
Factorial function using recursion.

In order to get a shorter, more compact code, instead of an if conditional instruction, we use the ternary conditional operator. In it, we check if the argument n is 
greater than 1. Depending on that, we return either the result of multiplying the number n by the result of the factorial(n – 1) call, or the value 1.
*/
function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(6)); // -> 720

/*
Recursion is commonly used in programming. However, as with any solution, recursion must be handled with care. We shouldn't use it where we can't estimate the number 
of embedded calls. We should also be very careful in formulating the condition that will interrupt the function sequence calls – errors can cause the program to suspend.
*/
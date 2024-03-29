///////////
// Tasks //
///////////

////////////
// Task 1 //
////////////

/*
Arrays in JavaScript have a sort method available which, as you might guess, allows you to sort its elements. This method takes as an argument a function that will 
compare two elements of the array. The function should return zero if we consider the arguments to be the same, a value less than zero if we consider the first one to 
be smaller than the second, and a value larger than zero otherwise. Take a look at the example:
    let numbers = [50, 10, 40, 30, 20];
    function compareNumbers(a, b) {
        let retVal = 0;
        if (a < b) {
            retVal = -1;
        } else if(a > b) {
            retVal = 1;
        }
        return retVal;
    }
    let sorted = numbers.sort(compareNumbers);
    console.log(sorted); // [10, 20, 30, 40, 50]

A. Try to modify the above piece of code to make it as short as possible. Suggestions:
    *use an anonymous function;
    *use an arrow function;
    *consider skipping the if statement.
*/
let numbers = [50, 10, 40, 30, 20];
let sorted = numbers.sort((a, b) => a - b);

console.log(sorted); // [10, 20, 30, 40, 50]

// B. Then modify the function so that the elements are sorted in descending order, not in ascending order as in the example.
numbers = [50, 10, 40, 30, 20];
sorted = numbers.sort((a, b) => b - a);
console.log(sorted); // [50, 40, 30, 20, 10]

////////////
// Task 2 //
////////////

/*
Write three functions with the names add, sub, and mult, which will take two numerical arguments. The functions are to check if the given arguments are integers 
(use Number.isInteger). If not, they return NaN, otherwise they return the result of addition, subtraction, or multiplication respectively. The functions are to be 
declared using a function statement.

Example of use and expected results:
    console.log(add(12, 10)); // -> 22
    console.log(mult(12, 10.1)); // -> NaN
*/
function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }

    return a + b;
}

function sub(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }

    return a - b;
}

function mult(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }

    return a * b;
}

////////////
// Task 3 //
////////////

/*
Rewrite the functions from the previous task using an arrow function expression, trying to write them in the shortest possible form.

Example of use and expected results:
    console.log(sub(12, 10)); // -> 2
    console.log(mult(10, 10.1)); // -> NaN
*/
add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

////////////
// Task 4 //
////////////

/*
Write an action function that will take the callback function as its first argument and the other two arguments as numbers. As a callback function, you will be able 
to pass one of the three functions from the previous task. The action function will call the callback function passed to it and will return the obtained result. The 
callback function will accept the second and third arguments from the action call.

Example of use and expected results:
    console.log(action(add, 12, 10)); // -> 22
    console.log(action(sub, 12, 10)); // -> 2
    console.log(action(mult, 10, 10.1)); // -> NaN
*/
let action = (callback, a, b) => callback(a, b);
// or
// let action = function (callback, a, b) {
//     return callback(a, b);
// }
// // or
// function action(callback, a, b) {
//     return callback(a, b);
// }

////////////
// Task 5 //
////////////

/*
Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, 
clearInterval and setTimeout.

Example of use and expected results:
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
*/
let counter = 1;
let intervalId = setInterval(   function () {
                                    console.log(counter++); // -> 1, 2, 3, 4, 5, 6, 7, 8, 9
                                }, 2000);

setTimeout( function () {
                clearInterval(intervalId)
            }, 20000);

////////////
// Task 6 //
////////////

/*
Write a function that will calculate the n-th element of the Fibonacci sequence. 

So each element of the sequence (except the first two) is the sum of the previous two. For example: F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 and F6 = F5 + F4 = 8. 
The function should use recursion. In the definition, use a function expression (store an anonymous function in a variable).

Example of use and expected results:
    console.log(fibbRec(4)); // -> 3
    console.log(fibbRec(7)); // -> 13
*/
let fibbRec = function (n) {
    let retVal = 0;

    if (n != 0) {
        if (n === 1) {
            retVal = 1;
        } 
        else {
            retVal = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }

    return retVal;
}

////////////
// Task 7 //
////////////

/*
Rewrite the function from Task 5 using an arrow function expression, but try to shorten its code as much as possible (use conditional operators, and try not to use 
additional variables other than the parameter n).
*/
let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));

////////////
// Task 8 //
////////////

// Write an iterative version of the function from Task 5 (use the for loop). Declare the function using a function statement.
function fibbIter(n) {
    let a = 0, b = 1;

    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }

    return b;
}
/*
"Function expressions"

To store a function in a variable or pass it as an argument to call a function, we do not necessarily have to declare it previously and use its name. 
We can call the same function using both the name add and the variable myAdd. We can shorten this notation and declare the function by storing it in a variable.
*/

/*
In the example, we declare the add function, and at the same time store it in the myAdd variable. This form of defining a function is called function expression. 
In this case, it is specifically a named function expression, because the function has a name (add). 
*/
let myAdd = function add(a, b) {
    return a + b;
}

console.log(myAdd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30

/*
If there is a named function expression, there will probably also 
be an unnamed, or precisely, an anonymous function expression. In fact, simply remove the name following the function keyword to change the function from named to 
anonymous.
*/
myAdd = function(a, b) {
    return a + b;
}

console.log(myAdd(10, 20)); // -> 30
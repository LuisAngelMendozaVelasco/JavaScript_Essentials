/*
"Shadowing"

The parameters are treated inside the function as local variables. And just like the local variables explicitly declared inside a function, they shadow the global 
variables of the same name (or more generally, variables from the outer scope).
*/

/*
The add function has two parameters: first and second. At the same time, we will declare, out of the function, global variables named first, second, third, and fourth.
If inside the function, we refer to the variable:
    *first, it will be treated as the parameter with such a name that shadows the first global variable (i.e. we will operate on the value passed as the first argument)
    *second, it will also be treated as the function parameter (the value passed as the second argument)
    *third, it will be treated as a global variable, because inside the function there is neither a local variable nor a parameter with that name that would shadow it;
    *fourth, it will be treated as global, the same as third.

Of course, outside the function, each of these names will refer to global variables.
*/
function add(first, second) {
    return first + second;
}
    
let first = 10, second = 20, third = 40, fourth = 80;
console.log(add(first, second)); // -> 30
console.log(add(second, third)); // -> 60
console.log(add(third, fourth)); // -> 120
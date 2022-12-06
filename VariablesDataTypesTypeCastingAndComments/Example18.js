/*
"Undefined"

The undefined type has only one value: undefined. It’s the default value that all variables have after a declaration if no value is assigned to them. 
We can also assign the value undefined to any variable, but in general, this should be avoided, because if we need to mark a variable as not holding any meaningful 
value, we should use null.
*/

let declaredVar;
console.log(typeof declaredVar); // -> undefined

declaredVar = 5;
console.log(typeof declaredVar); // -> number

declaredVar = undefined;
console.log(typeof declaredVar); // -> undefined

// The undefined value can also be returned by the typeof operator when a non-existent variable is used as an argument.
Console.log(typeof notDeclaredVar); // -> undefined
console.log(notDeclaredVar); // -> Uncaught ReferenceError: notDeclared is not defined
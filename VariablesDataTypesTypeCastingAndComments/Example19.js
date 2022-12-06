/*
"null"

The null value is quite specific. The value itself is primitive, while the type to which it belongs is not a primitive type, such as Number or undefined. 
This is a separate category, associated with complex types, such as objects. The null value is used to indicate that the variable does not contain anything, 
and most often it is a variable that is intended to contain values of complex types.

In a nutshell, we can assume that the undefined value is assigned to uninitialized variables automatically, but if we want to explicitly indicate that the variable 
does not contain anything, we assign it a null value. One important caveat for null is that when checked with the typeof operator, it will return "object", a 
surprising result. This is a part of a much more complicated object system, but for now, we just need to know that typeof null is equal to "object".
*/

let someResource;
console.log(someResource); // -> undefined
console.log(typeof someResource); // -> undefined

someResource = null;
console.log(someResource); // -> null
console.log(typeof someResource); // -> object
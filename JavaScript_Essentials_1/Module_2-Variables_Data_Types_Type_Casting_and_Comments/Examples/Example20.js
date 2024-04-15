/////////////////////////////////////////////////////////
// Type conversions - Primitive construction functions //
/////////////////////////////////////////////////////////

/*
Using literals is not the only way to create variables of the given primitive types. The second option is to make them using constructor functions. These types of 
functions are mainly used in JavaScript for object-oriented programming. However, these few listed constructor functions can also be used to create primitives, not 
just objects (this is not a general feature, but only for the listed functions). The following functions will return primitives of a given type: Boolean, Number, 
BigInt, and String.

Most of these functions can be called without any arguments. In such a situation:

    the function String will by default create and return an empty string – primitive "";
    the function Number will by default create and return the value 0;
    the function Boolean will by default create and return the value of false.

The function BigInt, unlike other constructor functions, requires you to pass some initial value to it. This can be an integer number that will be converted to a BigInt.
*/

const str = String();
const num = Number();
const bool = Boolean();

console.log(str); // -> ""
console.log(num); // -> 0
console.log(bool); // -> false

const big1 = BigInt(42);
console.log(big1); // -> 42n

const big2 = BigInt(); // -> Uncaught TypeError: Cannot convert undefined to a BigInt

// But creating default values is not impressive at all. We can accomplish these using literals. We use them in type conversions.
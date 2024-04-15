///////////////////////////////////////////////////////
// The throw statement and custom errors - continued //
///////////////////////////////////////////////////////

/*
The throw instruction can take any value. In this example it is an object, which is a composite data type. We can create a new object in many ways, including by using 
the operator new. Using this operator, we create a RangeError class object, which is a predefined error. The new object is initiated by the Max value 20 string. And such 
a new object, of the RangeError type, containing, among other things, the string we provided, will be thrown if the n parameter exceeds the allowed value.
*/
function factorial(n) {
    if (n > 20) {
        throw new RangeError("Max value 20");
    }

    let result = 1;

    for (; n > 1; n--) {
        result = result * n;
    }
    
    return result;
}

console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Max value 20
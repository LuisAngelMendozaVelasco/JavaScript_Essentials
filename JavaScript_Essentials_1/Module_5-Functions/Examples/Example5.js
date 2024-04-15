//////////////////////////////////////
// The return statement - continued //
//////////////////////////////////////

/*
return allows us not only to terminate a function. If we place some expression (literal, variable, function call) immediately after the return keyword, the value of 
this expression will be returned by the completed function to the place where it was called. We can then, for example, assign the returned value to a variable.
*/

/*
In the example, we declare a simple getTrue function, which always returns true. Pay attention to the function call – we store the result of this call in the test 
variable. 
*/
function getTrue() {
    return true;
}

let test = getTrue();
console.log(test); // -> true

/*
Inside the function, we will declare the local result variable, which will contain the calculated result, and use return to return it. The global variable meanTemp 
will contain the result of the function call, that is, the first time, 16.666666666666668 and the second time, 18.083333333333332.
*/
let temperatures;
let meanTemp;

function getMeanTemp() {
    let sum = 0;
    let result;

    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }

    result = sum / temperatures.length;
    return result;  
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
meanTemp = getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
meanTemp = getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

/*
The result variable is actually only used to temporarily store the value to be returned. So we can simplify the function code even more. We will skip the result 
variable by placing the appropriate operation directly after return.

The meanTemp variable has also become slightly redundant. We store the result of the function call in it, which is then displayed on the console. This can also be 
simplified by placing the getMeanTemp function call directly in console.log (without the use of the meanTemp variable).
*/
function getMeanTemp() {
    let sum = 0;

    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }

    return sum / temperatures.length;
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp()}`); // -> mean: 16.666666666666668

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp()}`); // -> mean: 18.083333333333332
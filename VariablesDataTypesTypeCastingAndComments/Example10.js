/*
"The var keyword - continued"

If we declare a variable using the keyword var inside a function, its scope will be limited only to the inside of that function (it's a local scope). 
This means that the variable name will be correctly recognized only inside this function.
*/

/*
we declared the global variable globalGreeting. Then we defined the testFunction function, inside which we declared the local variable localGreeting. 
Then we called the testFunction function, which resulted in writing out the values of both variables (inside the function, we have access to both the global 
variable and the local ones). Attempting to access the local variable localGreeting outside the function will fail. Variable declarations using the word 
var can also be local.
*/
var globalGreeting = "Good ";

function testFunction() {
    var localGreeting = "Morning ";  
    console.log("function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testFunction();

console.log("main program:");
console.log(globalGreeting);
console.log(localGreeting); // -> Uncaught ReferenceError: localGreeting is not defined
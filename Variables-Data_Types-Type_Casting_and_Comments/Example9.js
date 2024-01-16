//////////////////////////////////
// A brief word about functions //
//////////////////////////////////

/*
The definition starts with the function keyword, followed by the function name we invented. After the name, we see parentheses, which optionally could contain 
parameters passed to the function. Then we open the program block, which contains the instructions belonging to the function. When defining a function, 
the instructions contained in the function are not executed.
*/

function testFunction() {
    console.log("Hello"); // -> Hello
    console.log("World"); // -> World
}

console.log("let's begin:"); // -> let's begin:
console.log("Hello"); // -> Hello
console.log("World"); // -> World
console.log("and again:"); // -> and again:
console.log("Hello"); // -> Hello
console.log("World"); // -> World
console.log("and once more:"); // -> and once more:
console.log("Hello"); // -> Hello
console.log("World"); // -> World

// We can rewrite the previuos program using our testFunction function.
console.log("let's begin:"); // -> let's begin:
testFunction();
console.log("and again:"); // -> and again:
testFunction();
console.log("and once more:"); // -> and once more:
testFunction();
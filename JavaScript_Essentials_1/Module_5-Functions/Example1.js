/////////////////////////
// Declaring variables //
/////////////////////////

/*
As with variables, functions need to be declared before we can use them. The syntax for function declaration looks like this:
    function functionName() {
    code
    }

This type of function declaration in JavaScript is called a function statement. A function statement starts with the function keyword followed by the function name. 
Function names need to follow the same rules as variable names, and should also be meaningful. After the function name, there are parentheses that can optionally have 
function parameters. After the parentheses comes the function body, which is made from any number of statements (a code block).
*/

/*
Program code calculating the mean daily temperature. The function will use variables, declared outside of it (in the surrounding context). In fact, it is practically 
never done that way. 
We have declared our function by giving it a name and defining a sequence of instructions that it should perform. However, if we tried to execute this code, we would 
not see any effect because declaring a function is only a preparation. In order to execute this code, we have to call the function.
*/
let temperatures;
let sum;
let meanTemp;

function getMeanTemp() {
    sum = 0;

    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    
    meanTemp = sum / temperatures.length;    
}
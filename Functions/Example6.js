////////////////
// Parameters //
////////////////

/*
The use of parameters in functions is optional. There may be functions that do not have parameters. However, most often we create functions that have defined parameters 
and return values.

In JavaScript, a function’s parameters appear in its declaration. These are names separated by commas, placed in parentheses after the function name. Each parameter 
inside a function will be treated as a local variable. A function whose definition specifies the parameters must be invoked in an appropriate way. When such a function 
is called, the values (literals, variables, function calls) should be placed in parentheses after its name, and are treated as parameters inside the function. The values 
given during a call are called arguments. Arguments, if there is more than one, are separated by commas and must be passed in the same order as the parameters we define 
in the function declaration.

Let`s look at a simple function that adds two values. We will call it add.
    function add(first, second) {
        return first + second;
    }

In the function declaration, in parentheses, we put two parameters: first and second. The names of the parameters, just like the variables, should be related to their 
purpose – in this case, we have done it differently to emphasize that the order of the parameters is important. Inside the add function, these parameters are treated as 
local variables, whose values will be given when the function is called.
    let result = add(5, 7));
    console.log(result); // -> 12

In the example call, we pass the arguments 5 and 7 to the function. Thus, during the function operation, the first parameter has a value of 5 and the second parameter 
has a value of 7. The function returns the value 12 to the result variable.

We can pass any type of data as arguments to the function, both simple and complex. Let`s write the getElement function, which will return the selected element from 
the array, with the array and index of the element being the function`s parameters.
    function getElement(elements, index) {
        return elements[index];
    }

Let`s call it with sample arguments:
    let names = ["Alice", "Bob", "Eve", "John"];
    let name = getElement(names, 2);
    console.log(name); // -> Eve
*/

/*
The getMeanTemp function will take one parameter – temperatures. At the same time, we will remove the global variable with this name from the program and create two 
others, day1 and day2, which will contain the measurement data. These data will be passed on to the function.

The first time the getMeanTemp function is called, the day1 variable is passed on to the getMeanTemp function as an argument. The calculations performed inside the 
function using the temperatures parameter will therefore be based on the values from the day1 variable. In the second call, we pass another array to the function, 
stored in the day2 variable.
*/
function getMeanTemp(temperatures) {
    let sum = 0;

    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    
    return sum / temperatures.length;
}
    
let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp(day1)}`); // -> mean: 16.666666666666668

let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp(day2)}`); // -> mean: 18.083333333333332
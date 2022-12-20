/*
"Measuring code execution time"

One of the easiest ways to measure the speed of the program is to use the console.time and console.timeEnd methods, which allow us to make a precise measurement of the 
time between two specified places in our code, and display the result on the console. There are of course many more advanced tools, which can help us during the 
optimization of our code, but it is worth knowing these simple methods, which in many cases are enough to analyze the performance of the program.
*/

/*
With console.time, we indicate where to start the time measurement, while with console.timeEnd we end the measurement, and the result is displayed on the console at 
this point (the result you get will obviously differ from the one in the example). The time is given in milliseconds. In the calls of the console.time and 
console.timeEnd methods, we can specify a string (in the example it is 'Leibnitz') that will identify our stopwatch in case we use many of them in our program.
*/
let part = 0;
console.time('Leibniz');
for (let k = 0; k < 10000000; k++) {
    part = part + ((-1) ** k) / (2 * k + 1);
}
console.timeEnd('Leibniz'); // -> Leibniz: 456.60498046875 ms
let pi = part * 4;
console.log(pi); // -> 3.1415925535897915

/*
Let's look inside the for loop. In each iteration, the number -1 is raised to the power of k. Exponentiation is quite a time-consuming operation, so we can suspect that 
it strongly affects the speed of our program (especially as we do it ten million times). If the base of the exponentiation is the number -1, we will always get -1 or 1 
as a result, depending on whether the exponent is odd or even. In this case, we can replace exponentiation with a conditional instruction that checks if k is even 
(divisible by 2) or odd and returns 1 or -1 respectively.

Even such a small change allows us to more than double the speed of the program! Using the console.time and console.timeEnd methods allows us to analyze our code for 
performance. If we have the impression that something works too slowly, but we do not know which piece of code is responsible for this, we can perform measurements, 
locate the problem and, optionally, try to optimize the code. As we said before, there are many tools that also help us in this. Some of them are built into the 
Developer Tools integrated with the browser, but often the methods shown are enough to perform basic tests.
*/
part = 0;
console.time('Leibniz');
for(let k = 0; k < 10000000; k++) {
    part = part + (k % 2 ? -1 : 1) / (2 * k + 1);
}
console.timeEnd('Leibniz'); // -> Leibniz: 175.5458984375 ms
pi = part * 4;
console.log(pi);
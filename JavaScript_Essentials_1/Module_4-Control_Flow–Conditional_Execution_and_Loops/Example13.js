/////////////////////
// What are loops? //
/////////////////////

/*
In programming, loops are the second form of flow control statement. Together with conditional execution statements like if and switch, they allow for almost infinite 
freedom in how the application can work from an algorithmic point of view. While conditional statements are able to change code behavior (allowing us to decide during 
program execution whether a certain piece of code is to be performed or not), loops are an easy way to repeat any fragment of the code as many times as we want, 
or until some condition is met. There are a few types of loops in JavaScript, but we can loosely split them into two categories:
    * loops that are repeated a given number of times;
    * loops that continue until some condition is met.
*/

/*
"The while loop"
Imagine that in the program, we have created an array containing information about system users. If we wanted to display the name of each of them on the console, 
we would have to write console.log as many times as there are users. For example, for 100 users we write 100 console.log calls one under another. It would look rather 
weird. Instead, we can use a loop that calls the same console.log command 100 times, but for each subsequent array element. Each iteration of the loop will refer to 
the successive user.
*/
let n = 0;

while(n < 91) {
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}
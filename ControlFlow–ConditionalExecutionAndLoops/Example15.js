/*
"The for loop"

The for loop is part of the second type of loops, the one which is better in situations where we know how many times the loop should be executed (although this is 
not necessary). The syntax of the for loop is a bit more complicated and looks as follows:

    for (initialization; condition; increment) {
        block of code
    }

In the parentheses after the word for, we will not find a single condition this time, as was the case in the while loop. The inside of the parentheses is divided 
into three fields by semicolons, and each field is assigned a different meaning. In each of these fields, a statement may appear, which will be interpreted as 
follows in the order:
    *loop initialization statement;
    *loop condition statement;
    *loop increment statement.

All three statements are optional, but in fact we very rarely miss any of them. 
*/

/*
Using the for loop, we will try to write out successive integers from 0 to 9 on the console, so we will make ten iterations.
*/
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/*
As shown in the syntax of the for loop, there are three expressions inside the parentheses. The let i = 0 is an initialization, i < 10 is a condition, and i++ is 
an increment. Now let's try to rewrite the same example using the while loop
*/
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

/*
In both cases (for loop and while loop), we declare and initiate variable i before the loop starts (initially set to 0). Both loops will be executed as long as 
condition i < 10 is fulfilled. In both loops, at the end of each iteration, the value of variable i will be increased by 1. And of course, in both loops in each 
iteration, the current value of variable i will be printed on the console. So we can see that the for loop actually offers just a slightly different, more consistent 
way of writing the same thing that we can achieve with the while loop. Such a notation is particularly useful in cases such as the one presented in the example, 
where we use an iteration counter (in our example, the i variable), which must be initialized and incremented (or decremented). In such a situation, everything related 
to the counter (initialization, loop end condition, change of counter value) is located practically in one place, which may increase the readability of the code.
*/

/*
A typical example of using a for loop, where we know the number of iterations in advance, is when going through the elements of an array.
Let's assume that we have a four-element array of integers at our disposal and our dream is to sum up all these numbers. There is nothing easier than to go through 
the array, taking the element one by one and adding them to the result. We just have to remember that before starting the loop, the result is 0.
*/
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < 4; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

/*
There is a slight awkwardness in the code. We have set the number of iterations to four. It’s true that there are exactly four elements in the array, and in our 
example this number does not change, but it is not a universal rule. In normal programs, arrays very often change dynamically during program execution (elements 
are added or removed). In this case, it is definitely better to use the array property called length (we mentioned it when discussing arrays). This property 
contains the current number of array elements. 
*/
values = [10, 30, 50, 100];
sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190
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
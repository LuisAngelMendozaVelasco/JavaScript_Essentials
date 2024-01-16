///////////
// Scope //
///////////

/*
Until now, we assumed that after declaring a variable, its name could be used in the whole code of the program (i.e. the scope of the variable is global). 
This is not entirely true – the scope of a variable depends on where it is declared. One of the basic elements that influence the scope of variables is a program block.

"Program blocks"

We can separate the code of a program into blocks. In the blocks that we create using curly brackets, there is a set of instructions, which for some reason should be 
treated independently. The blocks are usually associated with conditional instructions, loops, or functions. We can also separate a block of a program unrelated to 
anything special, simply by choosing a certain range of instructions.
*/

/*
First, we declare the variable counter. Then we open a block inside which we initialize this variable and display its contents. Outside the block, we increase 
the value stored in the variable by 1 and display it again. In this case, the interpreter will execute the program as if it hadn't noticed the block, going through 
the instructions before the block, in the block, and after the block. Creating a block here, without, for example, conditional instructions, has no real 
justification – it is just an example of using brackets.
*/
let counter;

console.log(counter); // -> undefined

{
    counter = 1;
    console.log(counter); // -> 1
}

counter = counter + 1;
console.log(counter); // -> 2

// Program blocks can be nested, that is, we can create one block inside of another one.
let counter;

console.log(counter); // -> undefined

{
    counter = 1;
    {
        console.log(counter); // -> 1
    }
}

counter = counter + 1;
console.log(counter); // -> 2
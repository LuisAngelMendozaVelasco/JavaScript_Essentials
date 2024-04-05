///////////////////
// let and const //
///////////////////

/*
The scopes of variables (and constants) declared with let and const look slightly different than those declared with var.

The first rule is simple. If we declare any variable or constant using let or const, respectively, outside the code blocks, they will be global. By this we mean 
that their names will be visible throughout the program, outside blocks, inside blocks, in functions, and so on. We will be able to refer to them anywhere by 
their names, and of course have access to their values.

If we declare something using let or const inside a block, this will create a local variable or constant. It will be visible only inside the block in which it was 
declared and in blocks that can optionally be nested in it.
*/

/*
The height variable, declared outside the block, is global. The weight variable is local – its scope is limited by the block in which it was declared. 
This is clearly visible when trying to display the values of both variables inside and outside the block.
*/
let height = 180;

{
    let weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70   
}

console.log(height); // -> 180
console.log(weight); // -> Uncaught ReferenceError: weight is not defined

/*
We can also test the case with nested blocks. the info variable declared in the most internal block is visible only inside it. 
The weight variable is visible both inside the block in which it was declared and inside the block nested in it. And the global variable height is visible everywhere.
*/
let height = 200;

{
    let weight = 100;
    {
        let info = "tall";
        console.log(height); // -> 200
        console.log(weight); // -> 100
        console.log(info); // -> tall
    }
    console.log(height); // -> 200
    console.log(weight); // -> 100
    console.log(info); // -> Uncaught ReferenceError: info is not defined
 }
/////////
// var //
/////////

/*
In the case of variable declarations using the keyword var, the situation is slightly different. The variable declared using it outside the blocks will, 
as in the case of let, be global, in other words, it will be visible everywhere. If we declare it inside a block, it will usually turn out 
to be global again.
*/

/*
Both variables, height and weight, turn out to be global. The variables declared using var regardless of the place of declaration will not always be global.
The problem is that var ignores ordinary program blocks, treating them as if they do not exist. We declare a local variable using var only inside a function.
*/
var height = 180;

{
    var weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70   
}

console.log(height); // -> 180
console.log(weight); // -> 70
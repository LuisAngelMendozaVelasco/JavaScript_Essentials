//////////////////////////////////
// The if statement - continued //
//////////////////////////////////

// Logical and comparison operations are most commonly used as conditions, especially in more complex situations.

/*
In this example, to set the shippingCost to zero, the userAge needs to be over 21. The second if is calculated and needs the cartValue to be over or equal to 300, 
or the points to be greater than or equal to 500.
*/
let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;

if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}

console.log(shippingCost); // -> 0

/*
Another way to write the same thing is to use the logical AND operator. We can now remove one if instruction and describe everything as one, more complex condition. 
Please note that we used additional parentheses to group the selected logical operations. This will allow us to force their execution precedence.

Here the condition will be evaluated to true when:
    * userAge is greater than 21 AND;
    * cartValue is greater than or equal to 300 OR points is greater than or equal to 500.

So, we need to have the first condition met, and at least one from the second or third conditions.
*/
if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
    shippingCost = 0;
}

console.log(shippingCost); // -> 0
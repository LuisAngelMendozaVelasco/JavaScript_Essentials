//////////////////////////
// Assignment operators //
//////////////////////////

// There are operators that allow for the assigning of values to variables and constants. The basic assignment operator is the equals sign =. 

// This operator assigns the value of the right operand to the left operand.
const name = "Alice";
console.log(name); // -> Alice

// If several assignment operators appear in a sequence, the order from right to left applies.
let year = 2050;
let newYear = year = 2051;
console.log(year); // -> 2051
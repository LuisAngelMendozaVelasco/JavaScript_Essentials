// "Declarations and strict mode"

/*
We can see that we’ve forgotten to declare the variable height. The original JavaScript syntax allowed for such negligence, and at the moment of 
initialization it made this declaration for us. It seems like quite a good solution, but unfortunately it can sometimes lead to ambiguous and potentially 
erroneous situations
*/
height = 180;
console.log(height); // -> 180

/*
We’ve added "use strict", this statement has radically changed the behavior of the interpreter. Why? We use it when we want to force the interpreter to behave 
according to modern JavaScript standards. So, as long as we aren’t running some really old code, we should always use it. And this time, using a variable without 
its previous declaration is treated as an error.

The sentence "use strict"; must be placed at the very beginning of the code. It will cause the interpreter to deal with the rest of the code using strict mode, 
which is the modern JavaScript standard.*/
"use strict";

height = 180; // -> Uncaught ReferenceError: height is not defined
console.log(height);

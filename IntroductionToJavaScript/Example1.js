/*
The basic function allowing us to write information to the console is console.log. 
We can treat the console.log as a function*. In fact, the function is only a log, and console is the object to which the function belongs.
*This type of function, belonging to an object, is generally called a method. 
The argument is the text we want to display. In order to indicate that "Hello, World!" is the text, we put it in quotation marks.
To let the interpreter know where the command ends, we put a semicolon at the end of the function call. In this case, the interpreter would manage without such help, 
but it is a good habit to end each command with a semicolon, so that we do not forget it when it is really needed.
*/
console.log("Hello, World!");

// Use console.log to output our full name to the console.
console.log("Luis Mendoza");

// Output our year of birth.
console.log("1994");

// Output our year of birth, this time passing the date without the quotes.
console.log(1994);

// We can pass several arguments to console.log separated by commas
console.log("abc", "def", "ghi");

/* 
Output information about ourself to the console in the format: Name Surname (Year)
    * giving all the information as one argument;
    * giving the name, surname, and year as separate arguments.
*/
console.log("Luis Mendoza (1994)");
console.log("Luis", "Mendoza", "(1994)");

// Output the same information (name, surname, year) to the console, not side by side, but on consecutive lines.
console.log("Luis");
console.log("Mendoza ");
console.log("(1994)");

// A string can be concatenated using the + sign, for example "abc" + "def" will be treated as "abcdef". 
console.log("Luis" + " Mendoza " + "(1994)");

// 


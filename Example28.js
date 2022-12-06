/*
"Complex data types"

"Object"

Objects have many applications in JavaScript. One of the most basic is to use it as a structure known in computer science as a record. A record is a collection of 
named fields. Each field has its own name (or key) and value assigned to it. In the case of JavaScript objects, these fields are usually called properties. Records, 
or in our case objects, allow to store multiple values of different types in one place. In JavaScript, there are a few ways to create objects, but the easiest 
and fastest is to use the curly bracket literal.
*/

/*
The object we create and store in the variable testObj is not particularly useful, because it’s … empty. We have not defined any fields in it, i.e. any key–value pairs. 
*/
let testObj1 = {};
console.log(typeof testObj1); // -> object

/*
Let's try it again, this time by defining an object containing two fields with keys nr and str. We have created objects using the same literal, but at the same time 
we have created properties that are key–value pairs. Properties are separated by commas.
*/
let testObj2 = {
    nr: 600,
    str: "text"
};

/*
A specific property (field) of an object can later be referred to with dot notation. This notation requires the name of the object (a literal or the name of a variable 
containing the object) to be followed by a dot, followed by the field name (key) again.
*/
console.log(testObj2.nr); // -> 600
console.log(testObj2.str); // -> text

/*
Let's assume that we collect information about the users of our system. Information about a single user will consist of their first name, last name, age, and email address.
We still need to give different names for variables that store information (in the form of objects) about individual users, but this time the properties may have the 
same names. This makes the code not only clearer and more consistent, but it also makes it easier to perform actions on the properties of different users.
*/
let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};

/*
The properties of an object, as we have previously indicated, are made available with a dot and a key name. We can both read and modify the value associated with a 
particular key. What is more, we can also modify the whole object by adding a new, previously non-existent property. We also do this using dot notation – if during 
an attempt to modify the property the interpreter does not find the key we specify, it will create it.
*/
console.log(user1.name); // -> Calvin
console.log(user2.name); // -> Mateus

console.log(user1.age); // -> 66
user1.age = 67;
console.log(user1.age); // -> 67

console.log(user2.phone); // -> undefined
user2.phone = "904-399-7557";
console.log(user2.phone); // -> 904-399-7557

/*
We can also delete fields to an existing object.
*/
console.log(user2.phone); // -> 904-399-7557
delete user2.phone;
console.log(user2.phone); // -> undefined

/*
The usability of objects goes far beyond using them as data storage structures. However, it is a separate topic, largely related to object-oriented programming, 
which is part of more advanced programming techniques. In our case, objects will be simple structures, consisting of key–value pairs.
*/
/*
"What can arrays be useful for in practice?"

They are primarily a convenient way to store a collection of elements under one name. Additionally, it is very important that we can add new elements to an array 
while the program is running.

Using an array, we can add new users while the program is running. We mentioned several times that the array elements can be any data, including objects. 
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
Let's put information about these two users into the users array and try to display some information as part of the test:
*/
let users =[ 
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    }
];

console.log(users[0].name); // -> Calvin
console.log(users[1].age); // -> 21

/*
Let's try to add a new user to the array. We will do it  by assigning a new element to a free index.
*/
users[2] = {
    name: "Irene",
    surname: "Purnell",
    age: 32,
    email: "IreneHPurnell@rhyta.com"

}

console.log(users[0].name); // -> Calvin
console.log(users[1].name); // -> Mateus
console.log(users[2].name); // -> Irene

/*
During the program's operation, it is possible to interact with the user, for example, to retrieve data the user has entered. Such data could be used to create 
more objects and extend the array with elements we did not know about while writing the program.
*/
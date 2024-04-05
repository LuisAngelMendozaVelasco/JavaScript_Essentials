//////////////
// for … in //
//////////////

/*
There is also a version of the for loop that enables us to walk through object fields. This is a for ... in construction. It iterates through all fields of the 
indicated object, placing the names of these fields (or keys) in the variable. 
*/

let user = {name: "Calvin",
            surname: "Hart",
            age: 66,
            email: "CalvinMHart@teleworm.us"};

for (let key in user) {
    console.log(key); // -> name, surname, age, email
};

/*
In each loop iteration, the names of successive fields of the user object are assigned to the key variable, i.e.: name, surname, age, email. Then we write them on 
the console. In order to get access to the specified field, we use dot notation (the part of the course dedicated to data types) that is, after the name of the object, 
we write a dot and the field name (key). The key given in this notation is always treated as a literal. In the for ... in loop, this approach will not work, because 
the field name (key) is placed in a variable. Fortunately, we have an alternative solution, bracket notation. It allows us to refer to the selected object field using 
brackets (like in arrays). In the square bracket behind the object name, we place the field name, which can be either a literal or a variable containing that name.

Using bracket notation, we improve our example by displaying not only the keys, but also their assigned values.
*/
for (let key in user) {
    console.log(`${key} -> ${user[key]}`); // -> name -> Calvin, surname -> Hart, age -> 66, email -> CalvinMHart@teleworm.us
};
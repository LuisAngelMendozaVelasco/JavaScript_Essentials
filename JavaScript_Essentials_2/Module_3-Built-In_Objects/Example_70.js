// LAB   Code Challenge #3

// Scenario

// Create a Users class that will allow you to create objects containing a collection of individual users (users are created using the User class from the previous task).

// To create a collection, use a Map class (the key should be the email address, and the value should be the User object). The class should provide the following methods:

// - add – add a single user, arguments are name, surname and email;
// - delete - remove the user from the collection (the argument is the email)
// - get - retrieve a single user from the collection (the argument is the email)
// - getAll - retrieve all users from the collection (the argument is the name of the field by which the array is to be sorted: name, surname, or email

// Test your solution using the following code:

let nameRegExp = /^[A-Z][a-z]+$/;
let emailRegExp = /^([a-zA-Z]+\.)*[a-zA-Z]+@([a-zA-Z]+\.)+[a-zA-Z]{2,3}$/;

class User {
    #name;
    #surname;
    #email;

    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    get name() {
        return this.#name;
    }
    set name(val) {
        if (typeof val === 'string' && val.match(nameRegExp)) {
            this.#name = val;
        } else {
            throw(new Error(`Incorrect name format: ${val}`));
        }
    }
    get surname() {
        return this.#surname;
    }
    set surname(val) {
        if (typeof val === 'string' && val.match(nameRegExp)) {
            this.#surname = val;
        } else {
            throw(new Error(`Incorrect surname format: ${val}`));
        }
    }
    get email() {
        return this.#email;
    }
    set email(val) {
        if (typeof val === 'string' && val.match(emailRegExp)) {
            this.#email = val;
        } else {
            throw(new Error(`Incorrect email format: ${val}`));
        }
    }
}

class Users {
    #users;

    constructor() {
        this.#users = new Map();
    }

    add(name, surname, email) {
        try{
            this.#users.set(email, new User(name, surname, email));
        } catch(e) {
            console.log(e.message);
        }
    }

    delete(email) {
        return this.#users.delete(email);
    }

    get(email) {
        return this.#users.get(email);
    }

    getAll(sortBy) { //name,surname,email
        return [...this.#users].sort((u1,u2) => u1[1][sortBy] > u2[1][sortBy] ? 1 : -1).map(u => u[1]);
    }
}

let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com")); // -> User {}
console.log(users.getAll("name").map(u => u.name)); // -> [ 'Aaaa', 'Mmmm', 'Xxxx' ]
console.log(users.getAll("surname").map(u => u.surname)); // -> [ 'Bbbb', 'Ffff', 'Oooo' ]
console.log(users.getAll("email").map(u => u.email)); // -> [ 'cccc@gmail.com', 'dddd@gmail.com', 'eeee@gmail.com' ]
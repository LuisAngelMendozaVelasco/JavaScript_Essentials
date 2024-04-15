// LAB Code Challenge #2

// Scenario

// Declare a User class that will allow you to create objects with user information (first name, last name, email).

// The data should be passed to the constructor and stored as private properties.

// Create setters and getters to handle them. Use regular expressions to check if the data passed to the constructor or setter is in the correct 
// format (first and last name consist of letters only, first letter upper-case, proper email address format). For simplicity, assume that an email address can only consist of letters, 
// while strings of letters can be separated by dots.

// For example, abc.def@ghi.jk or a@abc.def.gh will be valid, while a_b@abc.def or abcd1@efg.hi.jk will be invalid.

// If data is incompatible with the format, do not save it and throw an exception (Error class) with an appropriate message.

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

try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1); // -> User {}
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
    
} catch(err) {
    console.log(err.message); // -> Incorrect name format: aaaa
}
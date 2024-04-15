// 1.8.1 Property configuration

let contact = {
    _age: 36,
    firstName : "David",
    lastName : "Taylor",
    get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
    set age(a) { if( a > 0) this._age = a;}
};

let keys = Object.keys(contact);
console.log(keys); // -> [ '_age', 'firstName', 'lastName', 'fullName', 'age' ]

let desc = Object.getOwnPropertyDescriptor(contact, "firstName");
console.log(desc); // -> {
                        //    value: 'David',
                        //    writable: true,
                        //    enumerable: true,
                        //    configurable: true
                        // }

let contact = {};

Object.defineProperty(contact, "_age", {
    value: 36,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.keys(contact);
console.log(contact._age); // -> 36

Object.defineProperty(contact, "_age", {
    value: contact._age,
    writable: false,
    enumerable: false,
    configurable: true
});

contact._age = 100;
console.log(contact._age); // -> 36

let enumKeys = Object.keys(contact);
let allKeys = Object.getOwnPropertyNames(contact);
console.log(enumKeys); // -> []
console.log(allKeys); // -> [ '_age' ]
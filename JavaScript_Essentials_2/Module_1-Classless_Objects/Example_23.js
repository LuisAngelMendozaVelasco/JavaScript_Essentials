// 1.7.4 Getters and setters

let contact = {
    _tel: "207-662-5412",
    get tel() {return this._tel;}
};

console.log(contact.tel); // -> 207-662-5412
contact.tel = "100-100-1000";
console.log(contact.tel); // -> 207-662-5412
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email); // -> RonaldSMurphy@freepost.org

let contact = {
    _tel: "207-662-5412",
    get tel() {return this._tel;},
    set tel(t) { this._tel = t;}
};

console.log(contact.tel); // -> 207-662-5412
contact.tel = "100-100-1000";
console.log(contact.tel); // -> 100-100-1000

let contact = {
    _age: 36,
   firstName : "David",
    lastName : "Taylor",
    get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
    set age(a) { if( a > 0) this._age = a;}
};

console.log(contact.fullName); // -> David Taylor
contact.age = -20;
console.log(contact.age); // -> 36
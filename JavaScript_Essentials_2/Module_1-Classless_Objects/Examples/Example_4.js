// 1.2.1 Basic way to create objects

let contact = {};

contact.tel = "207-662-5412";
console.log(contact);
console.log(contact.tel);

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

console.log(contact);
console.log(contact.tel);

let contact = {
    "first name": "Ronald"
};

console.log(typeof console);        // -> object
console.log(typeof console.log);    // -> function
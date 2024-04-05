// 1.3.4 Adding a new property

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

contact.firstName = "Ronald";
contact.lastName = "Murphy";
console.log(contact.tel);       // -> 207-662-5412
console.log(contact.firstName); // -> Ronald

console.log(contact.notes);     // -> undefined
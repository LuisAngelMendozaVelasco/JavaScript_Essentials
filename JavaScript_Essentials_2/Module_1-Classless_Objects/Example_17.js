// 1.6.1 References

// const x = 10;
// x = 20;    // TypeError: Assignment to constant variable.

// const contact = {};
// contact = { email: "RonaldSMurphy@freepost.org"}; // TypeError: Assignment to constant variable.

const contact = {};
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email); // -> RonaldSMurphy@freepost.org

contact.email = "rsmurphy@briazz.com";
console.log(contact.email); // -> rsmurphy@briazz.com
delete contact.email;
console.log(contact.email); // -> undefined
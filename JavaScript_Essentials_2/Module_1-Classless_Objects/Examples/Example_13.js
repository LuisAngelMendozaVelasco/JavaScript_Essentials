// 1.5.1 Property existence test and property enumeration

if(contact.notes) { // if different then undefined
    console.log(contact.notes);
}

if(!contact.notes) { // if undefined (check !)
    contact.notes = "something really important";
}

console.log(contact.notes); // -> undefined

console.log(contact.email.private); // exception!

if(contact && contact.email) {
    console.log(contact.email.private);
}

contact && contact.email && console.log(contact.email.private);
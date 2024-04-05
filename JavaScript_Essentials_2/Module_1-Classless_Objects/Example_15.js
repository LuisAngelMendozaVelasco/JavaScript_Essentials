// 1.5.3 Enumeration "for ... in"

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

for(x in contact) {
    // print property name
    console.log(x); // -> tel \n email
}

for(x in contact) {
    // print property value 
    console.log(contact[x]); // -> 207-662-5412 \n RonaldSMurphy@freepost.org
}

for(x in contact) {
    // print property name, type and value
    console.log(`${x} : ${typeof contact[x]} : ${contact[x]}`); // -> tel : string : 207-662-5412 \n email : string : RonaldSMurphy@freepost.org
}
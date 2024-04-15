// 3.2.18 The destructuring assignment

let myPets = ["cat", "dog", "hamster", "canary"];
let pet1 = myPets[0];
let pet3 = myPets[2];
let pet4 = myPets[3];
console.log(pet1); // -> cat
console.log(pet3); // -> hamster

let [pet1, , pet3, pet4] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> hamster

let myPets = ["cat", "dog"];
let [pet1, , pet3] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> undefined

let myPets = ["cat", "dog"];
let [pet1 = "fish", , pet3 = "fish"] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> fish
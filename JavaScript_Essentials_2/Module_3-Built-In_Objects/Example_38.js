// 3.2.16 Copying a selected part of the array

let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let p1 = myPets.slice(3); // ->  ["canary", "shark", "cat", "dog"]
let p2 = myPets.slice(3, 5); // -> ["canary", "shark"]
let p3 = myPets.slice(-3); // -> ["shark", "cat", "dog"]
let p4 = myPets.slice(-3, -1); // -> ["shark", "cat"]
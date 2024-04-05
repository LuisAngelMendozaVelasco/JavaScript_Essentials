// 3.2.24 Walking through the set elements

let petsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
petsSet.forEach(value => console.log(value)); // -> cat -> dog -> hamster

petsSet.forEach((value, key) => console.log(`(${value}:${key})`)); // -> (cat:cat) -> (dog:dog) -> (hamster:hamster)

let petsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
let petsIterator = petsSet.values();
console.log(petsIterator.next().value); // -> cat
console.log(petsIterator.next().value); // -> dog
console.log(petsIterator.next().value); // -> hamster

let petsIterator = petsSet.values();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> cat -> dog -> hamster
 result = petsIterator.next();
}
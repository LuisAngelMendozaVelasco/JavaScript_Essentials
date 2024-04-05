// 3.2.31 The for ... of loop

let petsArray = ["cat", "dog", "hamster"];
for( let pet of petsArray) {
    console.log(pet); // -> cat -> dog -> hamster
};
let petsSet = new Set(["cat", "dog", "hamster"]);
for( let pet of petsSet) {
    console.log(pet); // -> cat -> dog -> hamster
};
let petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
for( let pet of petsMap) {
    console.log(pet); // -> ["cats", 1] -> ["dogs", 3] -> ["hamsters", 2]
    console.log(pet[0]); // -> ctas -> dogs -> hamsters
}
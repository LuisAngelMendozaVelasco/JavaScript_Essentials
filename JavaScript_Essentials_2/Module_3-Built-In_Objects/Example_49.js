// 3.2.29 Handling elements

let petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(petsMap.get("hamsters")); // -> 5
petsMap.set("hamsters", 6);
console.log(petsMap.get("hamsters")); // -> 6
petsMap.delete("hamsters");
console.log(petsMap.get("hamsters")); // -> undefined
petsMap.clear();
console.log(petsMap.size); // -> 0
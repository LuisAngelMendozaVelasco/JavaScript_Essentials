// 3.2.35 Handling elements

console.log(anotherPetsObj.snakes); // -> 1
anotherPetsObj.snakes = 2;
console.log(anotherPetsObj.snakes); // -> 2
delete anotherPetsObj.snakes;
console.log(anotherPetsObj.snakes); // -> undefined
anotherPetsObj.snakes = 0;
console.log(anotherPetsObj.snakes); // 0
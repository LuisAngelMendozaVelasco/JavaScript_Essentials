// 3.1.7 Static properties and methods of the Number constructor

Console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // -> 5e-324
console.log(Number.MAX_SAFE_INTEGER); // -> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -> -9007199254740991

let numbers = [2e100, 200000, 1.5, Infinity];
for(let i=0; index< numbers.length; index++) {
    console.log(`is ${numbers[i]} Integer: ${Number.isInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} safe Integer: ${Number.isSafeInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} finite number: ${Number.isFinite(numbers[i])}`);
}

// is 2e+100 Integer: true
// is 2e+100 safe Integer: false
// is 2e+100 finite number: true
// is 200000 Integer: true
// is 200000 safe Integer: true
// is 200000 finite number: true
// is 1.5 Integer: false
// is 1.5 safe Integer: false
// is 1.5 finite number: true
// is Infinity Integer: false
// is Infinity safe Integer: false
// is Infinity finite number: false

console.log(Number.parseFloat("123.12.12")); // -> 123.12
console.log(Number("123.12.12")); // -> NaN
console.log(Number.parseInt("1204px")); // -> 1204
console.log(Number("1204px")); // -> NaN
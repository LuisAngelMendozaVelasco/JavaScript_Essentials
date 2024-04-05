// 3.3.7 Other useful methods

console.log(Math.abs(-3.25)); // -> 3.25
console.log(Math.abs(10)); // -> 10

console.log(Math.min(100, 20, 300, 10, 400)); // -> 10
let numbers = [100, 20, 300, 10, 400];
console.log(Math.max(...numbers)); // -> 400

console.log(Math.pow(2, 3)); // -> 8 => 23
console.log(Math.pow(4, 2)); // -> 16 => 42
console.log(Math.pow(4, -1)); // -> 0.25 => 4-1 = 1/4^1 
console.log(Math.pow(4, -2)); // -> 0.0625 => 4-2 = 1/4^2 
console.log(Math.pow(4, 0.5)); // -> 2 => 40.5 = 4^(1/2) = √(2&4)
console.log(Math.pow(-1,0.5)); // -> NaN => -10.5 = √(2&-1)
console.log(Math.sqrt(4)); // -> 2
x = Math.pow(Math.E, 2); // -> 7.3890560989306495
console.log(Math.log(x)); // -> 2
console.log(Math.log2(16)); // -> 4
console.log(Math.log10(1000)); // -> 3

console.log(Math.cos(Math.PI/3)); // -> 0.5000000000000001
console.log(Math.tan(Math.PI/4)); // -> 0.9999999999999999
console.log(Math.asin(1)); // -> 1.5707963267948966
// 4.2.1 Generators and iterators

let s = new Set([1, 30]);
s.add(500);
s.add(50);

for(let e of s) {
    console.log(e); // -> 1  30   500   50
}

console.log([...s]); // -> [1, 30, 500, 50]

console.log(...s); // -> 1  30  500   50

let it = s[Symbol.iterator]();
console.log(it.next().value); // -> 1
console.log(it.next().value); // -> 30
console.log(it.next().value); // -> 500
console.log(it.next()); // -> {done: false, value: 50}
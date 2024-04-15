// 4.2.3 Generators

function* testGenerator() {
    yield 10;
    yield 20;
    yield 30;
}
let gen = testGenerator();
console.log(gen.next()); // -> {value: 10, done: false}
console.log(gen.next()); // -> {value: 20, done: false}
console.log(gen.next()); // -> {value: 30, done: false}
console.log(gen.next()); // -> {value: undefined, done: true}

function* testGenerator() {
    for (let i=10; i<=30; i+=10) {
        yield i;
    }
}
let gen = testGenerator();
console.log(gen.next()); // -> {value: 10, done: false}
console.log(gen.next()); // -> {value: 20, done: false}
console.log(gen.next()); // -> {value: 30, done: false}
console.log(gen.next()); // -> {value: undefined, done: true}

function* testGenerator() {
    let data = [10, 20, 30];
    for (let element of data) {
        yield element;
    }
}
let gen = testGenerator();
console.log(gen.next()); // -> {value: 10, done: false}
console.log(gen.next()); // -> {value: 20, done: false}
console.log(gen.next()); // -> {value: 30, done: false}
console.log(gen.next()); // -> {value: undefined, done: true}

let iterable = {
    data: [10, 30, 60, 20, 90],
    [Symbol.iterator]: function* () {
        for(element of this.data) {
            yield element;
        }
    }
}
let it = iterable[Symbol.iterator]();
console.log(it.next()); // -> {value: 10, done: false}
console.log(it.next()); // -> {value: 30, done: false}
for( a of iterable ) {
    console.log(a); // -> 10  30  60  20  90
}
console.log(...iterable); // -> 10  30  60  20  90
console.log([...iterable]); // -> [10  30  60  20  90]

let it1 = iterable[Symbol.iterator]();
console.log([...it1]); // -> [10  30  60  20  90]
console.log([...it1]); // -> []
let it2 = iterable[Symbol.iterator]();
console.log([...it2]); // -> [10  30  60  20  90]

let factorialGenerator = function* (range = Infinity) {
    let last = 1;
    for (let index = 1;index <= range; index++){
        last *= index;
        yield last;
    }
}
let factorial = factorialGenerator(3);
console.log(factorial.next()); // -> {value: 1, done: false}
console.log(factorial.next()); // -> {value: 2, done: false}
console.log(factorial.next()); // -> {value: 6, done: false}
console.log(factorial.next()); // -> {value: undefined, done: true}

class Factorial {
    constructor(range = Infinity) {
        this.range = range;
    }
    [Symbol.iterator] = function* (){
        let last = 1;
        for(let index = 1; index <= this.range; index++){
            last *= index;
            yield last;
        }        
    }
}
let factorial = new Factorial(5);
console.log([...factorial]); // -> [1, 2, 6, 24, 120]
let it = factorial[Symbol.iterator]();
console.log(it.next().value); // -> 1
console.log(it.next().value); // -> 2
console.log(it.next().value); // -> 6

function* fibonacci(range = Infinity) {
    let lastButOne = 0, last = 1;
    yield lastButOne;
    yield last;
    for(let i=1; i<=range; i++) {
        let tmp = lastButOne + last;
        lastButOne = last;
        last = tmp;
        yield last;
    }
}
let fibIt1 = fibonacci(10);
console.log([...fibIt1]);
let fibIt2 = fibonacci();
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
console.log(fibIt2.next().value);
let fibIt3 = fibonacci(5);
for( let f of fibIt3) {
    console.log(f);
}

function* cities() {
    for(city of ['London', 'Oslo', 'Berlin']) {
        yield city;
    }
}
function* test() {
yield* cities();
yield 'Amsterdam'
yield* ['Madrid', 'Rome'];
}
console.log([...test()]); // -> ['London', 'Oslo', 'Berlin', 'Amsterdam', 'Madrid', 'Rome']
// 4.1.1 Extended Parameter Handling – Default parameter values

function greetings(name) {
    console.log(`Hi, ${name}!`)
}
greetings(); // -> Hi, undefined!
greetings('Alice'); // -> Hi. Alice!

function greetings(name = 'anonymous') {
    console.log(`Hi, ${name}!`)
}
greetings(); // -> Hi, anonymous!
greetings('Alice'); // -> Hi. Alice!

function test(a, b = 1, c, d = 2) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}
test(); // -> a: undefined, b: 1, c: undefined, d: 2
test(100); // -> a: 100, b: 1, c: undefined, d: 2
test(100, 200); // -> a: 100, b: 200, c: undefined, d: 2
test(100, 200, 300); // -> a: 100, b: 200, c: 300, d: 2
test(100, 200, 300, 400); // -> a: 100, b: 200, c: 300, d: 400
// 2.1.3 The instance of operator

let AlmostEmptyClass = class {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
};

let almostEmptyObject = new AlmostEmptyClass(120); // 120

console.log(typeof almostEmptyObject); // -> "object"

console.log(almostEmptyObject.constructor.name); // -> "AlmostEmptyClass"

console.log(almostEmptyObject instanceof AlmostEmptyClass); // -> true
console.log(almostEmptyObject instanceof String); // -> false
let str = new String("test me");
console.log(str instanceof String); // -> true

console.log(almostEmptyObject instanceof Object); // -> true
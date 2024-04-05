// 2.1.2 Class expression

function namedFunction() { 
    console.log("I'm named, I hope ... ") 
};

let anonymousFunction = function() {
    console.log("I'm a bit anonymous ...")
};

let notExactlyAnonymousFunction = function anotherNamedFunction() {
    console.log("I'm confused ...")
};

namedFunction(); // -> I'm named, I hope ...
anonymousFunction(); // -> I'm a bit anonymous ...
notExactlyAnonymousFunction(); // -> I'm confused ...

let AlmostEmptyClass = class {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
};

let almostEmptyObject = new AlmostEmptyClass(120); // -> 120
almostEmptyObject.sayHi(); // -> Hi!
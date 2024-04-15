// 2.4.2 Shadowing

class AlmostEmptyClass { 
    constructor(sth) { 
        console.log(sth); 
    }; 
    sayHi() { 
        console.log("Hi!") 
    }; 
}; 
    class ExtendedClass extends AlmostEmptyClass {
        constructor(name) {
            super("I’m super ...");
            this.name = name;
        };
    sayHi() { 
        console.log(`Hi ${this.name}!`); 
    };
    newHi() {
        this.sayHi();
    }
    oldHi() {
        super.sayHi();
    };
};

let obj = new ExtendedClass("Bob"); // -> I’m super ...
obj.sayHi(); // -> Hi Bob!
obj.newHi(); // -> Hi Bob!
obj.oldHi(); // Hi!

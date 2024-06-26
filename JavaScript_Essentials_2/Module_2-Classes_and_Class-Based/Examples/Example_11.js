// 2.6.1 Classes vs. constructors

class TestClass { 
    constructor(arg) {
        this.arg = arg;
        console.log(this.arg);
    }; 
    
    showSth() { 
        console.log("I'm prototyped!");
    };
    
    static showSth() { 
        console.log(`Hi, I'm static!`);
    };  
}; 

let test = new TestClass("Hello");
test.showSth(); // -> I'm prototyped!
TestClass.showSth(); // -> I'm static!
console.log(test instanceof TestClass);

let Test = function(arg) { 
    this.arg = arg;
    console.log(this.arg);
}; 
    
Test.prototype.showSth = function() { 
    console.log("I'm prototyped!");
};
    
Test.showSth = function() { 
    console.log(`Hi, I'm static!`);
};  

let test = new Test("Hello");
test.showSth(); // -> I'm prototyped!
Test.showSth(); // -> I'm static!
console.log(test instanceof Test);

let Test = function(arg) { 
    this.arg = arg;
    this.showSth = function() { 
        console.log("I'm prototyped!");
    };
    console.log(this.arg);
}; 
        
Test.showSth = function() { 
    console.log(`Hi, I'm static!`);
};
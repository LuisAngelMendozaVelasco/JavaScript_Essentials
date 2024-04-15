// 1.9.4 new Object()

let emptyObject = new Object();
console.log(emptyObject.constructor.name); // -> Object

let anotherEmptyObject = {};
console.log(anotherEmptyObject.constructor.name); // -> Object
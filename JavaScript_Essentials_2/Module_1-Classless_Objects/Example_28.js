// 1.9.5 Object.create

let reallyEmptyObject = Object.create(null);
console.log(typeof reallyEmptyObject.constructor); // -> undefined
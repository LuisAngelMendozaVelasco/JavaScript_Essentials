// 1.1.3 An object as a different type of array

let sampleObject = {
    id: 10, 
    delay: 20,
    name: "en to tre",
    isPresent: true,
    delay: 50
};

sampleObject.delay = sampleObject.delay * 2;
console.log(sampleObject.id);       // -> 10
console.log(sampleObject.name);     // -> en to tre
console.log(sampleObject.delay);    // -> 100
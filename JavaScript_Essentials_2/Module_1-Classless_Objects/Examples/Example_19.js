// 1.6.4 Copying objects (copying references (), cloning, merging)

let point0 = {x:10, y: 20};
let point1 = point0;    // copy reference
let point2 = {};

Object.assign(point2, point0);  //  copy properties into the new object
console.log(point2.x);
console.log(point2.y);
console.log(point1 === point0); // true
console.log(point1 === point2); // false

let point3 = {};
Object.assign(point3, point0, {z: 100});
console.log(point3.z);  // 100

var point4 = {};
Object.assign(point4, point3, {z: 200, color: "red"});
console.log(point4.z);    // 200

let point0 = {x:10, y: 20};
let point2 = Object.assign({}, point0);
let point3 = Object.assign({}, point0, {z: 100});

let point0 = {x:10, y: 20};
let point2 = { ...point0};
let point3 = { ...point0, z: 100};

let circle1 = {
    radius: 100,
    center: {
        x: 100,
        y: 100
    }};

let circle2 = { ...circle1};
circle1.radius = 200;
circle1.center.x = 200;
console.log(circle2.radius);
console.log(circle2.center.x);
console.log(circle1 === circel2); // false
console.log(circle1.center === center); // true !

let deepClone = function(obj) {
    let newObj = {...obj};
    for(property in newObj) {
        if(typeof newObj[property] === "object") {
            newObj[property] = deepClone(newObj[property]);
        }
    }
    return newObj;
}
// 1.10.5 Constructor

let Figure = function(){
    this.getType = function() {
        return this.type ? this.type : "unknown";
    }
};

let figure = new Figure;

let Circle = function(center, radius){
    this.type = "circle";
    this.center = center;
    this.radius = radius;
};

Circle.prototype = figure;
let circle1 = new Circle({x:0, y:0}, 10);
let circle2 = new Circle({x:100, y:100}, 100);

let Triangle = function(v1, v2, v3) {
    this.type = "triangle";
    this.vertices = [ v1, v2, v3];
};

Triangle.prototype = figure;
let triangle1 = new Triangle({x:0, y:0}, {x:50, y:50}, {x:10, y:100});
console.log(circle1.getType()); // -> circle
console.log(triangle1.getType()); // -> triangle

Circle.prototype.hi = function(){console.log("Hi!")};

circle1.hi(); // -> Hi!
triangle1.hi(); // -> Hi!
figure.hi(); // -> Hi!

let testString = new String("unu doi trei");
console.log(testString.length); // -> 12

String.prototype.hi = function(){console.log("Hi!")};

console.log("abcd".hi()); // -> Hi!
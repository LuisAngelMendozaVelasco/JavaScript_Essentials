// 1.9.2 Factory

let createPoint  = function(x, y) {
    let obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
};

let point1 = createPoint(1,1);
let point2 = createPoint(2,2);
console.log(point1.x); // ->  1
console.log(point2.x); // -> 2

let createPoint  = function(x, y) {
    return {
        x:x,
        y:y
    }
};

let createPoint  = function(x, y) {
    return {
        x,
        y
    }
};

let createPoint  = (x, y) => ({x, y});

let createColoredPoint  = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    return {
        x,
        y,
        getColor() {return _color}
    }
};

let coloredPoint1 = createColoredPoint (1, 1, "red");   // -> ... object under construction
let coloredPoint2 = createColoredPoint (2, 2, "green"); // -> ... object under construction 
console.log(coloredPoint1.getColor());  // -> red
console.log(coloredPoint2.getColor());  // -> green
console.log(coloredPoint1._color);  // -> undefined !!!
// 1.7.2 The this keyword

let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return (typeof circle.radius === "number") ? 
        "circle" : "unknown" ;
    }
};

console.log(circle.getType()); // circle

let figure = {...circle};
delete circle.radius;
console.log(figure.radius); // 100
console.log(figure.getType()); // "unknown"!

let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return typeof this.radius === "number" ? "circle" : "unknown" ;
    }
};

console.log(circle.getType()); // circle
let figure = {...circle};
delete circle.radius;
console.log(figure.radius); // 100
console.log(figure.getType()); // "circle"

let add = function (a,b) {
    return a + b;
}

let add = (a,b) => a + b;
// 1.10.3 Object.setPrototypeOf

figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};

let circle = {
    type: "circle",
    center: {x:0, y:0},
    radius: 100
};

Object.setPrototypeOf(circle, figure);
let proto = Object.getPrototypeOf(circle);
console.log(circle.getType()); // -> circle
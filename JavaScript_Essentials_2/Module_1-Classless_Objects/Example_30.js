// 1.10.2 __proto__

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

circle.__proto__ = figure;

console.log(figure.getType()); // -> unknown
console.log(circle.getType()); // -> circle
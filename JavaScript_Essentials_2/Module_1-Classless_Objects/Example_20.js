// 1.7.1 Methods

let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType: function() {
        return "circle";
    }
};

let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return "circle";
    }
};

console.log(circle.getType()); // -> circle
console.log(circle["getType"]() ); // -> circle
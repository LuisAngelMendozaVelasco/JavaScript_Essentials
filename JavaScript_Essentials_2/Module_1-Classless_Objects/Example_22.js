// 1.7.3 this inside nested objects

let circle = {
    radius: 100,
    center: {
        x:0,
        y:0,
        show(){console.log(`${this.x}, ${this.y}`)}
    }
}

circle.center.show(); // -> 0. 0

let test = {
    point: circle.center
}
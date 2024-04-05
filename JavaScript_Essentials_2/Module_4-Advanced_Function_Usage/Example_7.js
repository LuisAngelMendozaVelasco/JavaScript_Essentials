// 4.1.7 Forwarding calls (apply, call, bind)

let point = {
    x: 100,
    y: 200,
    testThis: function() {
        console.log(this);
    },
    show: function() {
        console.log(`${this.x}:${this.y}`);
    }
}
point.testThis(); // -> {x: 100, y: 200, test: ƒ}
point.show(); // -> 100:200

'use strict';
function test() {
    console.log(this);
}
test(); // -> undefined

function test() {
    console.log(this);
}
test(); // -> Window (global object)

'use strict';
function showPoint(msg) {
    console.log(this);  // -> undefined
    console.log(`${msg} [${this.x}:${this.y}]`); // -> TypeError
}
showPoint('coordinates');

'use strict';
let point = {
    x: 100,
    y: 200
}
function showPoint(msg) {
    console.log(this);  // -> {x: 100, y: 200}
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
showPoint.call(point, 'coordinates');

'use strict';
let point = {
    x: 100,
    y: 200
}
function showPoint(msg) {
    console.log(this);  // -> {x: 100, y: 200}
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
showPoint.apply(point, ['coordinates']);

'use strict';
let point = {
    x: 100,
    y: 200
}
function showPoint(msg) {
    console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
let showCoordinates = showPoint.bind(point, 'coordinates');
let show = showPoint.bind(point);
showCoordinates(); // -> coordinates [100:200]
showCoordinates('point'); // -> coordinates [100:200]
show('point'); // -> point [100:200]
showPoint('test'); // -> TypeError
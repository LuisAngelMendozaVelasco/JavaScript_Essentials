// 4.2.2 Iterators

let almostIterable = {
    data: [10, 30, 60, 20, 90]
}
for( let a of almostIterable ) { // -> TypeError: almostIterable is not iterable
    console.log(a); 
}
let arr = [...almostIterable]; // -> TypeError: almostIterable is not iterable

let almostIterable = {
    data: [10, 30, 60, 20, 90],
    iterator: function() {
        return {
            next: function() {
                return {
                    value: undefined,
                    done: false
                }
            }
        }
    }
}
it = almostIterable.iterator(); // -> {next: ƒ}
it.next(); // -> {value: undefined, done: false}

let almostIterable = {
    data: [10, 30, 60, 20, 90],
    iterator: function() {
        let index = -1;
        let data = this.data;
        return {
            next: function() {
                index++;
                return {
                    value: data.length === index ? undefined : data[index],
                    done: data.length === index
                }
            }
        }
    }
}
let it = almostIterable.iterator();
console.log(it.next()); // -> {value: 10, done: false}
console.log(it.next()); // -> {value: 30, done: false}

for( let a of almostIterable ) { // -> TypeError: almostIterable is not iterable
    console.log(a); 
}
console.log(...almostIterable);  // -> TypeError: almostIterable is not iterable
console.log([...almostIterable]);  // -> TypeError: almostIterable is not iterable

for( let a of almostIterable ) { // -> TypeError: almostIterable is not iterable
console.log(a); 
}
console.log(...almostIterable);  // -> TypeError: almostIterable is not iterable
console.log([...almostIterable]);  // -> TypeError: almostIterable is not iterable
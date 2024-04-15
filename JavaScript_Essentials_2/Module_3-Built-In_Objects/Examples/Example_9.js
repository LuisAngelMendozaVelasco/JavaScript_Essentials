// 3.1.10 The String constructor

let name = "Bob";
console.log(name.length); // -> 3
console.log("Alice".length ); // -> 5
console.log("".length ); // -> 0

let strings = [undefined, "", "ab", "cd ef", 4, null];
for(let i=0; i< strings.length; i++) {
    strings[i] && strings[i].length && console.log(strings[i]);
}
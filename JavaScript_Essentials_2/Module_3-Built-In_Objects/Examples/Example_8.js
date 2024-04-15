// 3.1.9 What we already know about strings

let delay = 10;
let name = "Bob";
let order = 'pizza';
let info = `Hi ${name}, you have to wait about ${delay} minutes for your ${order}`;
console.log(info); // -> Hi Bob, you have to wait about 10 minutes for your pizza
console.log(typeof name); // -> string
console.log(typeof order); // -> string
console.log(typeof info); // -> string

let anotherInfo = "Hi " + name + ", you have to wait about " + delay + " minutes for your " + order;

let warn2 = "Confirm ticket reservation for \"Alien 10\" movie.";
let warn1 = 'Confirm ticket reservation for "Alien 10" movie.';
let warn2 = "Confirm ticket reservation for 'Alien 10' movie.";
let warn3 = `warning: "Confirm ticket reservation for 'Alien 10' movie."`;
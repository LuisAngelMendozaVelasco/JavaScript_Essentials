// 3.3.12 Basic rules for regular expressions

let re = /c\.t/;
console.log(re.exec("cut")); // -> null
console.log(re.exec("c.t")); // -> ["c.t", index: 0, input: "c.t", groups: undefined]

let re1 = /o*ps/;
console.log(re1.exec("ps")); // -> ["ps", index: 0, input: "ps", groups: undefined]
console.log(re1.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re1.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
let re2 = /o+ps/;
console.log(re2.exec("ps")); // -> null
console.log(re2.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re2.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
let re3 = /o?ps/;  /// strange, isnt it?
console.log(re3.exec("ps")); // -> ["ps", index: 0, input: "ps", groups: undefined]
console.log(re3.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re3.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]

let re1 = /ca|ut/;
console.log(re1.exec("cattle")); // -> ["ca", index: 0, input: "cattle", groups: undefined]
console.log(re1.exec("haircut")); // -> ["ut", index: 5, input: "haircut", groups: undefined]
console.log(re1.exec("city")); // -> null
let re1 = /c(a|u)t/;
console.log(re1.exec("cattle")); // -> ["cat", "a", index: 0, input: "cattle", groups: undefined]
console.log(re1.exec("haircut")); // -> ["cut", "u", index: 4, input: "haircut", groups: undefined]
console.log(re1.exec("city")); // -> null

let re = /\so{2,3}ps/; // repeats 'o' two or three times 
console.log(re.exec("He said: ops!")); // -> null
console.log(re.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
console.log(re.exec("He said: ooooooooops!")); // -> null

let re1 = /c[aiu]t/;
console.log(re1.exec("cattle")); // -> ["cat", index: 0, input: "cattle", groups: undefined]
console.log(re1.exec("haircut")); // -> ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re1.exec("city")); // -> ["cit", index: 0, input: "city", groups: undefined]
let re2 = /c[^au]t/;
console.log(re2.exec("cattle")); // -> null
console.log(re2.exec("haircut")); // -> null
console.log(re2.exec("city")); // -> ["cit", index: 0, input: "city", groups: undefined]

let re = /id\d+/;
console.log(re.exec("My ids.")); // -> null
console.log(re.exec("id60001")); // -> ["id60001", index: 0, input: "id60001", groups: undefined]

let re1 = /^(abc\s){3}$/;
console.log(re1.exec("abc abc abc ")); // -> ["abc abc abc ", "abc ", index: 0, input: "abc abc abc ", groups: undefined]
console.log(re1.exec("abc abc abc abc ")); // -> null
console.log(re1.exec("abc abcabc")); // -> null
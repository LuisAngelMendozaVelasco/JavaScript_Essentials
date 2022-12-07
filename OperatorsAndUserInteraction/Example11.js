/*
"ternary"

The operator discussed is quite unusual, because it is the only operator using three operands. It is a conditional operator. Based on the value of the 
first operand (true or false), the value of the second or third operand, respectively, is returned. This operator is most often used to place one of the two values 
in the variable depending on a certain condition. The three operands are separated from each other by ? (the first from the second) and : (the second from the third).
*/

console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob

let name = 1 > 2 ? "Alice" : "Bob";
console.log(name); // -> Bob
// 3.2.11 Mapping elements

let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let squarePower = array1.filter(item => typeof item === "number").map(item => item*item); // -> [8100, 6400, 100, 400, 900, 10000, 2500]
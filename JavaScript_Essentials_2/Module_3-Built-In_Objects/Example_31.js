// 3.2.9 The every and some methods

let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let anyNumberPresent = array1.some( (item) => {
    if(typeof item === "number") {
        return true;
    } else {
        return false;
    }
}); // -> true

anyNumberPresent = array1.some( (item) => {
    return (typeof item === "number");
}); // -> true

anyNumberPresent = array1.some( item => typeof item === "number"); // -> true

let array2 = [90, 80, 10, 20, 30, 100, 50];
let allPositive = array2.every(item => item > 0); // -> true
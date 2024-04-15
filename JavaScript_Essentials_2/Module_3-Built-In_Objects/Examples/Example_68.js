// LAB   Code Challenge #1

// Scenario

// Write a function that will draw m integers from 0 to n. Pass parameters m and n and two flags to the function:

// - the first determines whether the drawn numbers may be repeated;
// - the second one states if the returned array of numbers should be sorted.

// Use the Set class.

// Test your solution using the following code:

function getRandomSet(m, n, uniq, sorted) {
    let retVal = uniq ? new Set() : [];
    let push = (e) => uniq ? retVal.add(e) : retVal.push(e);
    let length = () => uniq ? retVal.size : retVal.length;

    for(;length() < m;) {
        push(Math.floor(Math.random() * Math.floor(n)));
    }

    return sorted ? [...retVal].sort((n1, n2) => n1 - n2) : [...retVal];
}

console.log(getRandomSet(10, 20, false, false)); // -> [3, 12, 0,  0, 0, 7, 16, 6, 10, 8]
console.log(getRandomSet(10, 20, false, true)); // -> [1,  5,  6,  7,  8, 9, 10, 12, 13, 16]
console.log(getRandomSet(10, 20, true, false)); // -> [8,  4, 1, 6, 12, 9, 13, 7, 3,  5]
console.log(getRandomSet(10, 20, true, true)); // -> [0, 1,  2,  4,  5, 7, 9, 12, 15, 18]
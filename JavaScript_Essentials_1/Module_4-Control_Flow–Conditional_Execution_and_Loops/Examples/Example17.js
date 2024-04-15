//////////////
// for … of //
//////////////

/*
for ... of, is dedicated for use with arrays. In a loop of this type, we do not explicitly specify any conditions or number of iterations, as it is performed exactly 
as many times as there are elements in the indicated array.
*/

let values = [10, 30, 50, 100];
let sum = 0;

for (let number of values) {
    sum += number;
}

console.log(sum); // -> 190

/*
In brackets after the word for, we will not find three fields separated by semicolons. There is a variable declaration, followed by the word of and then an array, 
the elements of which we will loop through (variable or literal). In our example, for (let number of values) means that the number variable will contain the subsequent 
elements of the values array in each iteration. The syntax of this loop is as follows:
    for (variable of array) {
        block of code
    }
*/

/*
This time, we declare a cities array, which contains objects describing some of the biggest cities in the world. Each object contains name and population fields. 
Using the for ... of loop, we go through this array and display information about all cities that have more than 20 million inhabitants.
*/
let cities = [  { name: "New York", population: 18.65e6 },
                { name: "Cairo", population: 18.82e6 },
                { name: "Mumbai", population: 19.32e6 },
                { name: "São Paulo", population: 20.88e6 },
                { name: "Mexico City", population: 21.34e6 },
                { name: "Shanghai", population: 23.48e6 },
                { name: "Delhi", population: 25.87e6 },
                { name: "Tokyo", population: 37.26e6 }];

for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`); // -> São Paulo (20880000), Mexico City (21340000), Shanghai (23480000), Delhi (25870000), Tokyo (37260000)
    }
}
// 4.3.5 async/await – A different approach to promises

function newPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    });
}
async function testAsync() {
    console.log('testAsync start');
    let resp = await newPromise();
    console.log(resp);
    console.log('testAsync end');
}
console.log('before testAsync ...');
testAsync();
console.log('... after testAsync');

const value = 200;
async function getSquare(v) {
    const response = await fetch(`http://localhost:3000/json?value=${v}`);
    const data = await response.json();
    console.log(`server: ${v} * ${v} = ${data.square} (${data.time}ms)`);
};
getSquare(200);
console.log(`browser: ${value} * ${value} = ${value * value}`);

function newPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('something bad happened')), 1000);
    });
}
async function testAsync() {
    try {
            let resp = await newPromise();
        console.log(resp);
    } catch(error) {
        console.log(`error: ${error.message}`)
    }
}
testAsync();
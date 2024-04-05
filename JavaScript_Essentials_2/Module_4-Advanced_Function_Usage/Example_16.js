// 4.3.4 Promises

let p = new Promise((resolve, reject) => {
    resolve(5);
});

let p = new Promise((resolve, reject) => {
    reject(new Error('!!!'));
});

let p = new Promise((resolve, reject) => {
    let value = Math.floor(Math.random() * 4);
    if (value === 0) {
        reject(new Error('!!!'));
    } else {
        setTimeout(() => {
            resolve(value);
        }, value * 1000);
    }
});

let p = new Promise((resolve, reject) => {
    let value = Math.floor(Math.random() * 4);
    if (value === 0) {
        reject(new Error('!!!'));
    } else {
        setTimeout(() => {
            resolve(value);
        }, value * 1000);
    }
});
let handleResolved = function (value) {
    console.log(value);
}
let handleRejected = function (error) {
    console.log(`Error: ${error.message}`);
}
p.then(handleResolved, handleRejected);
console.log('end');

let p = new Promise (function(resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});
p.then(v => console.log(v)).finally(() => console.log('promise is settled'));

let p = new Promise (function(resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});
p.finally(() => console.log('promise is settled')).then(v => console.log(v));

let p = new Promise (function(resolve, reject) {
    setTimeout(() => reject('err'), 1000);
});
p.finally(() => console.log('promise is settled')).then(v => console.log(v), e => console.log(e));

let p = new Promise (function(resolve, reject) {
    setTimeout(() => reject('err'), 1000);
});
p.finally(() => console.log('promise is settled')).catch( e => console.log(e));

let p = new Promise (function(resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});
p.finally(() => console.log('promise is settled')).catch( e => console.log(e));

let p = new Promise (function(resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});
p.finally(() => console.log('promise is settled')).catch( e => console.log(e));

let p = new Promise (function(resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});
p.then(v => {console.log(v)});
p.then(v => {console.log(v)});
p.then(v => {console.log(v)});

let p = new Promise((resolve, reject) => {
    resolve(5);
});
p.finally(() => {
    console.log('end')
})
.then(v => {
    console.log(v);
    return ++v;
})
.then(v => {
    console.log(v);
    return ++v;
})
.then(v => {
    console.log(v);
});

let p = new Promise((resolve, reject) => {
    resolve(5);
});
p.then(v => {
    console.log(v);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(6), 1000);
    });
})
.then(v => {
    console.log(v);
});

let promises = [
new Promise ((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
}),
new Promise ((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
}),
new Promise ((resolve, reject) => {
    setTimeout(resolve(2), 2000);
}),
];
Promise.all(promises).then(resolved => resolved.forEach(p => console.log(p)));

let promises = [
new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
}),
new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
}),
new Promise((resolve, reject) => {
    setTimeout(() => reject('err 2'), 2000);
}),
];
Promise.all(promises)
.then(a => a.forEach(p => console.log(p)))
.catch(e => console.log(e));

let promises = [
new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 4000);
}),
new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
}),
new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 2000);
}),
];
Promise.any(promises)
.then(p => console.log(`any: first resolved ${p}`));
Promise.race(promises)
.then(p => console.log(`race: first resolved ${p}`));

let promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 4000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => reject('err 2'), 2000);
    }),
];
Promise.any(promises)
.then(p => console.log(`any: resolved ${p}`))
.catch(e => console.log(`any: rejected ${e}`));
Promise.race(promises)
.then(p => console.log(`race: resolved ${p}`))
.catch(e => console.log(`race: rejected ${e}`));

let promises = [
new Promise((resolve, reject) => {
    setTimeout(() => reject('err 3'), 3000);
}),
new Promise((resolve, reject) => {
    setTimeout(() => reject('err 2'), 2000);
}),
];
Promise.any(promises)
.then(p => console.log(`any: resolved ${p}`))
.catch(e => console.log(`any: rejected ${e}`));
Promise.race(promises)
.then(p => console.log(`race: resolved ${p}`))
.catch(e => console.log(`race: rejected ${e}`));

const value = 200;
let promise = new Promise(function (resolve, reject) {
let request = new XMLHttpRequest();
request.onload = () => {
    if (request.status === 200) {
        resolve(JSON.parse(request.responseText));
        // console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
    } else {
        reject(new Error(request.status));
    }
};
request.open('GET', `http://localhost:3000/json?value=${value}`);
request.send();
})
promise.then(
function (result) {
    console.log(`server: ${value} * ${value} = ${result.square} (${result.time}ms)`);
},
function (error) {
    console.log(error.message);
}
);

const value = 200;
fetch(`http://localhost:3000/json?value=${value}`)
.then(response => response.json())
.then(data => {
    console.log(`server: ${value} * ${value} = ${data.square} (${data.time}ms)`);
});
console.log(`browser: ${value} * ${value} = ${value * value}`);
// 4.1.4 Simulating named parameters

function getFile({url, name, mime}) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
    // ...
    // some logic responsible for connecting and downloading the file
}
let parameters = {name: 'test.json', url: 'https://localhost/files', mime: 'application/json'};
getFile(parameters); // -> url: https://localhost/files, name: test.json, mime: application/json
getFile({mime: 'image/jpeg', url: 'http://test.com/rest', name: 'id.jpg'}); // -> url: http://test.com/rest, name: id.jpg, mime: image/jpeg
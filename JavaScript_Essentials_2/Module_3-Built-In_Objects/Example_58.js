// 3.3.3 Converting from JSON format

let vehicleJSON = '{"id":"AK12113","position":{"longitude":59.358615,"latitude":17.947589}}';
let vehicle = JSON.parse(vehicleJSON);
console.log(typeof vehicle); // -> object
console.log(vehicle.position.longitude); // -> 59.358615

let vehcilesJSON = '[{"id":"AK12113","latitude":59.358615,"longitude":17.947589},{"id":"AL1024","latitude":59.358615,"longitude":17.947589},{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]';
vehcilesJSON = vehcilesJSON.replaceAll("id", "plate");
let vehicles = JSON.parse(vehcilesJSON);
console.log(vehicles instanceof Array); // -> true
console.log(vehicles.length); // -> 3
console.log(vehicles[0].plate); // -> AK12113
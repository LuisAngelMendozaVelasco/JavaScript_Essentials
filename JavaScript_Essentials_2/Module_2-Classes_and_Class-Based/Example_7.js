// 2.4.1 Inheritance

class Bus extends Vehicle {
    constructor({seats}) {
        this.seats = seats;
    }
}

let bus = new PassengerVehicle({seats: 40}); 
console.log(bus.seats); // -> 40
console.log(bus.id); // -> ! undefined

class Bus extends Vehicle {
    constructor({seats, id, latitude, longitude}) {
        super({id, latitude, longitude});
        this.seats = seats;
    }
}

let bus = new Car({seats: 4, longitude: 18.213423, latitude: 59.367628, id: "AL1024"}); 
console.log(bus.seats); // -> 4
console.log(bus.id); // -> "AL1024"
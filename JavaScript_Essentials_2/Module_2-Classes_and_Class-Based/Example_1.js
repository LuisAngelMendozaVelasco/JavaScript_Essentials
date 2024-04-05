// 2.1.1 Class declaration

let Vehicle = function(id, latitude, longitude){
    
    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.id = id;
    this.status = "unavailable";
    this.time = Date.now();
    this.latitude = latitude;    
    this.longitude = longitude;
};

let vehicle1 = new Vehicle("AL1024", 59.358615, 17.947589);
vehicle1.setPosition(59.367647, 18.213451);
console.log(vehicle1); // -> Vehicle {
                                //     setPosition: [Function (anonymous)],
                                //     id: 'AL1024',
                                //     status: 'unavailable',
                                //     time: 1712114043117,
                                //     latitude: 59.367647,
                                //     longitude: 18.213451
                                // }

let Vehicle = function(id, latitude, longitude){
    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.id = id;
    this.status = "unavailable";
    this.setPosition(latitude, longitude);
};

let Vehicle = function(initialData){
    let {id, latitude, longitude} = initialData;
    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.id = id;
    this.status = "unavailable"; 
    this.setPosition(latitude, longitude);
};

let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});

let Vehicle = function({id, latitude, longitude}){
    this.setPosition = function({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.getPosition = function() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
    this.id = id;
    this.status = "unavailable";
    this.setPosition({latitude, longitude});
};

let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});

class EmptyClass {};
let emptyObject = new EmptyClass;

class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
};
let almostEmptyObject = new AlmostEmptyClass(120); // -> 120
almostEmptyObject.sayHi(); // -> Hi!

class Vehicle {
    constructor({id, latitude, longitude}){
       this.setPosition = function({latitude, longitude}) {
           this.time = Date.now();
           this.longitude = longitude;
           this.latitude = latitude;
       };
       this.getPosition = function() {
           return {
               latitude: this.latitude,
               longitude: this.longitude
           };
       };
       this.id = id;
           this.status = "unavailable";
       this.setPosition({latitude, longitude});
       };
   };

let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});

class Vehicle {
    constructor({id, latitude, longitude}){
        this.id = id;
        this.status = "unavailable";
        this.setPosition({latitude, longitude});
    };
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    getPosition() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
};

let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.setPosition({longitude: 18.193121, latitude: 59.378654});
console.log(vehicle.getPosition()); // -> { latitude: 59.378654, longitude: 18.193121 }
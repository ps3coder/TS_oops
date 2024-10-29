"use strict";
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }
    accelerate() {
        this.speed += 10;
    }
    break() {
        this.speed -= 10;
    }
    getSpeed() {
        return this.speed;
    }
}
const myCar = new Car("Toyota", "Camry");
myCar.accelerate();
myCar.accelerate();
console.log("Current Speed ", myCar.getSpeed());

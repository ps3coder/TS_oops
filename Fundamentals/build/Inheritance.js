"use strict";
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    describe() {
        console.log(`This ia a shape at position(${this.x} , ${this.y})`);
    }
}
class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
const circle = new Circle(10, 10, 10);
console.log(circle.area());

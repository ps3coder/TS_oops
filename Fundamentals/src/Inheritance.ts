class Shape {
    x: number;
    y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    describe() {
        console.log(`This ia a shape at position(${this.x} , ${this.y})`)
    }
}

class Circle extends Shape {
    radius: number;

    constructor(x: number, y: number, radius: number) {
        super(x, y);
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius ** 2;
    }

}
const circle = new Circle(10, 10, 10);
console.log(circle.area())

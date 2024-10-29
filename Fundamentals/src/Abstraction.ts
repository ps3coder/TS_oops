class Car {
    private brand: string;
    private model: string;
    private speed: number;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }
    public accelerate(): void {
        this.speed += 10;
    }
    public break(): void {
        this.speed -= 10
    }
    public getSpeed(): number {
        return this.speed
    }
}
const myCar: Car = new Car("Toyota", "Camry")

myCar.accelerate();
myCar.accelerate();

console.log("Current Speed ", myCar.getSpeed());

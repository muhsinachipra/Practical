// Combine objects with different functionalities rather than relying on inheritance alone.

class Engine {
    start() {
        console.log('Engine started');
    }
}

class Car {
    constructor() {
        this.engine = new Engine();  // Car is composed of an Engine
    }

    start() {
        this.engine.start();  // Delegation to the engine object
        console.log('Car is running');
    }
}

const myCar = new Car();
myCar.start();  // Output: Engine started, Car is running

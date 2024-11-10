interface IEngine {
    isEngineLaunched: boolean;
    launchEngine(): void;
    stopEngine(): void;
}

enum Gears {
    R = 'R',
    N = 'N',
    $1 = 1,
    $2 = 2,
    $3 = 3,
    $4 = 4,
}

interface ITransmission {
    currentGear: Gears,
    setGear(gear: Gears): void,
}

interface ILight {
    isLightOn: boolean,
    turnOn(): void
    turnOff(): void
}

interface ICar {
    engine: IEngine,
    transmission: ITransmission,
    light: ILight,
    turnOnLight(): void
    turnOffLight(): void
    launchEngine(): void
    stopEngine(): void
    setGear(gear: Gears): void
}

class Engine implements IEngine {
    isEngineLaunched: boolean;
    constructor() {
        this.isEngineLaunched = false;

    }
    launchEngine() {
        this.isEngineLaunched = true;
        console.log('Engine launched');
    }

    stopEngine() {
        this.isEngineLaunched = false;
        console.log('Engine stopped');
    }
}

class Transmission implements ITransmission {
    currentGear: Gears

    constructor() {
        this.currentGear = Gears.N
    }

    setGear(gear: Gears) {
        this.currentGear = gear;
        console.log(`Switched ${gear} gear`);
    }
}

class Light implements ILight {
    isLightOn: boolean

    constructor() {
        this.isLightOn = false;
    }
    
    turnOff() {
        this.isLightOn = false;
        console.log('Light off');
    }

    turnOn() {
        this.isLightOn = true;
        console.log('Light on');
    }
}

class Car implements ICar {
    engine = new Engine();
    transmission = new Transmission();
    light = new Light()

    launchEngine = this.engine.launchEngine
    stopEngine = this.engine.stopEngine
    get isEngineStarted() {
        return this.engine.isEngineLaunched
    }

    setGear = this.transmission.setGear
    get currentGear() {
        return this.transmission.currentGear
    }

    turnOffLight = this.light.turnOn
    turnOnLight = this.light.turnOff
    get isLightOn() {
        return this.light.isLightOn
    }
}

const car = new Car();


car.setGear(Gears.N);
car.launchEngine();
car.turnOnLight();
car.setGear(Gears.$1);
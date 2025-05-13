import { COLORS } from '../../../helpers/colors.ts';

// 1. Interfaces
interface Vehicle {
  assemble(): void
}

interface Engine {
  start(): void
}

// 2. Clases Concretas de los productos

class ElectricCar implements Vehicle {
  assemble(): void {
    console.log('%cAssembling Electric Car', COLORS.green);
  }
}

class GasCar implements Vehicle {
  assemble(): void {
    console.log('%cAssembling Gas Car', COLORS.blue);
  }
}


class ElectricEngine implements Engine {
  start(): void {
    console.log('%cStart Electric Engine', COLORS.purple);
  }
}

class GasEngine implements Engine {
  start(): void {
    console.log('%cStart Gas Engine', COLORS.yellow);
  }
}

interface VehicleFactory {
  createVehicle(): Vehicle
  createEngine(): Engine
}

class ElectricVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new ElectricCar()
  }
  createEngine(): Engine {
    return new ElectricEngine()
  }
}

class GasVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new GasCar()
  }
  createEngine(): Engine {
    return new GasEngine()
  }
}

function main(factory: VehicleFactory){
  const vehicle = factory.createVehicle();
  const engine = factory.createEngine();

  vehicle.assemble();
  engine.start();
}

main(new ElectricVehicleFactory());
main(new GasVehicleFactory());
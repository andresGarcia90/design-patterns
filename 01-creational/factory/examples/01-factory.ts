interface Vehicle {
  color: string;
  state: string;
}

class Car implements Vehicle {
  door: number;
  color: string;
  state: string;

  constructor({ door = 4, color = 'red', state = 'new' }: Partial<Car> = {}) {
    this.door = door;
    this.color = color;
    this.state = state;
  }
}

class Truck implements Vehicle {
  wheelSize: string;
  color: string;
  state: string;

  constructor(wheelSize = 'large', color = 'blue', state = 'new') {
    this.wheelSize = wheelSize;
    this.color = color;
    this.state = state;
  }
}


// Factory

type VehicleType = 'car' | 'truck';

interface VehicleOptions {
  vehicleType: VehicleType;
  [key: string]: any;
}

class VehicleFactory {

  private vehicleClass: new (options?: any) => Vehicle = Car;

  createVehicle(options: VehicleOptions): Vehicle {
    const { vehicleType, ...rest } = options;

    switch (vehicleType) {
      case 'car':
        this.vehicleClass = Car;
        break;
      case 'truck':
        this.vehicleClass = Truck;
        break;
      default:
        this.vehicleClass = Car;
    }

    return new this.vehicleClass(rest);
  }

}
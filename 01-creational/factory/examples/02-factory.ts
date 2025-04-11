interface Hamburger {
  prepare(): void
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparing Chicken Hamburger');
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparing Beef Hamburger');
  }
}

class BeenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparing Been Hamburger');
  }
}

abstract class Restaurant {
  abstract createHamburger(): Hamburger;
  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class BeefRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

class ChickenRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

class BeenRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new BeenHamburger();
  }
}

function main() {
  let restaurant: Restaurant;

  const burgerType = prompt('What type of hamburger do you want? (1: Chicken, 2: Beef or 3: Been)');

  switch (burgerType) {
    case '1':
      restaurant = new ChickenRestaurant();
      break;
    case '2':
      restaurant = new BeefRestaurant();
      break;
    case '3':
      restaurant = new BeenRestaurant();
      break;
    default:
      throw new Error('Invalid burger type');
  }

  restaurant.orderHamburger();

}

main();
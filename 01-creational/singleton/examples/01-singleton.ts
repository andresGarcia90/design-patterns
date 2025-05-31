import { COLORS } from "../../../helpers/colors.ts";
class DragonBall {
  private static instance: DragonBall;
  private ballsCollected: number;


  private constructor() {
    this.ballsCollected = 0;
  }



  public static getInstance(): DragonBall {
    if (!DragonBall.instance) {
      DragonBall.instance = new DragonBall();
      console.log("%cLas esferas del dragon fueron creadas", COLORS.green);
    }
    return DragonBall.instance;
  }

  collectBall(): void {
    if (this.ballsCollected < 7) {
      this.ballsCollected++;
      console.log(`%cLas esferas del dragon fueron recogidas ${this.ballsCollected}`, COLORS.green);
      return;
    } else {
      console.log(`%cEs momento de llamar a Shenlong`, COLORS.red);      
    }
  }

  summonShenglong(): void {
    if (this.ballsCollected === 7) {
      console.log(`%cEs momento de llamar a Shenlong`, COLORS.red);
      this.ballsCollected = 0;
      return;
    } else {
      console.log(`%cFaltan ${7 - this.ballsCollected} esferas`, COLORS.red);
    }
  }
}

function main () {
  console.log("Goku")
  const gokuDrangonBall = DragonBall.getInstance();
  gokuDrangonBall.collectBall();
  gokuDrangonBall.collectBall();  
  gokuDrangonBall.summonShenglong();
  console.log("Vegeta")
  const vegetaDragonBall = DragonBall.getInstance();
  vegetaDragonBall.collectBall();
  vegetaDragonBall.collectBall();
  vegetaDragonBall.collectBall();
  vegetaDragonBall.summonShenglong();
  console.log("Goku")
  gokuDrangonBall.collectBall();
  gokuDrangonBall.collectBall();
  gokuDrangonBall.collectBall();
  gokuDrangonBall.summonShenglong();
}

main();
import { COLORS } from '../helpers/colors.ts';
import { getTextLonger, formatText } from '../helpers/text.ts';
class Computer {
  public cpu: string = 'cpu - not defined';
  public ram: string = 'ram - not defined';
  public storage: string = 'storage - not defined';
  public gpu: string = 'gpu - not defined';

  public toString(): string {
    const longestText = getTextLonger([this.cpu, this.ram, this.storage, this.gpu]) + 'storage: '.length;
    return `
    --${ formatText('-', longestText, '-') }--
    | ${ formatText('Computer', longestText) } |
    --${ formatText('-', longestText, '-') }--
    | ${formatText(`cpu: ${this.cpu}`, longestText)} |
    | ${formatText(`ram: ${this.ram}`, longestText)} |
    | ${formatText(`storage: ${this.storage}`, longestText)} |
    | ${formatText(`gpu: ${this.gpu}`, longestText)} |
    --${ formatText('-', longestText, '-') }--
    `;
  }

}

class ComputerBuilder {
  protected computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }


  // aca esta la posta del patron Builder.
  // Te permite devolver una instancia superior.
  // sin importar como este seteado por dentro el objeto.
  build(): Computer {
    return this.computer;
  }

}

function main () {
  const basicComputer = new ComputerBuilder()
    .setCPU('AMD 5')
    .setRAM('8GB')
    .setStorage('500GB')
    .setGPU('GTX 1080')
    .build();

    console.log('%c Basic computer: ', COLORS.green);
    console.log(basicComputer.toString());
    
  const gamingComputer = new ComputerBuilder()
    .setCPU('AMD Ryzen 7 7800X3D')
    .setRAM('2GB (2x16GB) DDR5 6000MHz')
    .setStorage('1TB NVMe')
    .setGPU('AMD Radeon RX 7900')
    .build();


    console.log('%c Gaming computer: ', COLORS.red);
    console.log(gamingComputer.toString());
}



main();
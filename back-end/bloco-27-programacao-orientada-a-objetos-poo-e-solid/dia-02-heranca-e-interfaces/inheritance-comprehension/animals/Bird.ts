import Animal from './Animal';

export default class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando!`);
  }
}

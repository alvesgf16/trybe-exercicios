import Animal from './Animal';

export default class Bird extends Animal {
  move() { console.log(`${this.name} está voando.`); }
}
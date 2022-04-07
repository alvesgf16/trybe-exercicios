import Animal from './Animal';

export default class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}
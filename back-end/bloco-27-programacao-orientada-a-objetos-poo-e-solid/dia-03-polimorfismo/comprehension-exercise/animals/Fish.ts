import Animal from './Animal';

export default class Fish extends Animal {
  move() { console.log(`${this.name} está nadando.`); }
}
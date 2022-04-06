export default class Superclass {
  constructor(public isSuper: boolean = true) { }

  public sayHello() {
    console.log('Olá mundo!');
  }
}
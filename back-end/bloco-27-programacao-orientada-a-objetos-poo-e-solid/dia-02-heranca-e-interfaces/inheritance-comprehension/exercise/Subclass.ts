import Superclass from './Superclass';

export default class Subclass extends Superclass {
  constructor() {
    super();

    this.isSuper = false;
  };

  public sayHello2() {
    return this.sayHello();
  }
};



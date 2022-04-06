import MyInterface from './MyInterface';

export default class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  public myFunc(myParam: number) {
    return `${this.myNumber + myParam}`;
  }
}
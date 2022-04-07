import Person from './Person';

export default class Contract<T> {
  static _number = 0;
  constructor(public broker: T){}
  static get number() { return this._number; }
}
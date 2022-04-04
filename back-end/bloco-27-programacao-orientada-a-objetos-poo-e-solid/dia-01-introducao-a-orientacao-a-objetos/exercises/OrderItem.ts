export default class OrderItems {
  private _name: string;

  private _cost: number;

  constructor(
    n: string,
    c: number,
  ) {
    this._name = n;
    this._cost = c;
  }
}

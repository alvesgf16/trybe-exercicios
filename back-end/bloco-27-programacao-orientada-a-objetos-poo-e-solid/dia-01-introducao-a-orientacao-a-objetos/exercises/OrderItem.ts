export default class OrderItem {
  private _name: string;

  private _price: number;

  constructor(
    n: string,
    p: number,
  ) {
    this._name = n;
    this._price = p;
  }

  get price() {
    return this._price;
  }
}

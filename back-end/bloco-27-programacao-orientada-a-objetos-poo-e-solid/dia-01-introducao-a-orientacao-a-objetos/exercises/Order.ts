export default class Order {
  private _customer: string;

  private _orderItems: string[];

  private _paymentMethod: string;

  private _discount: number;

  constructor(
    c: string,
    oIs: string[],
    pM: string,
    d: number,
  ) {
    this._customer = c;
    this._orderItems = oIs;
    this._paymentMethod = pM;
    this._discount = d;
  }
}

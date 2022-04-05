import Customer from './Customer';
import OrderItem from './OrderItem';

export default class Order {
  private _customer: Customer;

  private _orderItems: OrderItem[];

  private _paymentMethod: string;

  private _discount: number;

  constructor(
    c: Customer,
    oIs: OrderItem[],
    pM: string,
    d: number,
  ) {
    this._customer = c;
    this._orderItems = oIs;
    this._paymentMethod = pM;
    this._discount = d;
  }

  totalCost() {
    return this._orderItems.reduce((acc, cur) => acc + cur.price, 0);
  }

  totalCostWithDiscount() {
    return this.totalCost() * (1 - this._discount);
  }
}

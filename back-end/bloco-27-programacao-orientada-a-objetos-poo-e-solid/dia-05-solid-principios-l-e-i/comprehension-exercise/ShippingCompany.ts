import Company from './Company';
import ShippedItem from './ShippedItem';

export default class ShippingCompany extends Company {
  AddToFlight(flightNum:number, item: ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num == flightNum);
    if (currentFlight) {
      currentFlight.Add(item);
    }
  }

  RemoveFromFlight(flightNum: number, item: ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num == flightNum);
    if (currentFlight) {
      currentFlight.Remove(item);
    }
  }
}
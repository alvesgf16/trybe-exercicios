import Notificator from './Notificator';

export default class PhoneNotification implements Notificator {
  private phone: number;

  constructor(phone: number) {
    this.phone = phone;
  }

  sendNotification(message: string) {
    console.log(
      'Here should go the implementation to send notification to the phone'
      + `${this.phone} - ${message}`,
    );
  }
}
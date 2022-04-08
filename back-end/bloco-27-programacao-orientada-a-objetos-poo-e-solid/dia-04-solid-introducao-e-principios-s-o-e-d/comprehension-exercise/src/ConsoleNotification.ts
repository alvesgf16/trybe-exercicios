import Notificator from './Notificator';

export default class ConsoleNotification implements Notificator {
  // eslint-disable-next-line class-methods-use-this
  sendNotification(message: string) {
    console.log(`Here we go again! - ${message}`);
  }
}

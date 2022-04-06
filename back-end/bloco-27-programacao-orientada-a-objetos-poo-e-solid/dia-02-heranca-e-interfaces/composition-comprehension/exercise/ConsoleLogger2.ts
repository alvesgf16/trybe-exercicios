import Logger from './Logger';

export default class ConsoleLogger2 implements Logger {
  log(message: string) {
    console.log(`Console2: ${message}`);
  }
}
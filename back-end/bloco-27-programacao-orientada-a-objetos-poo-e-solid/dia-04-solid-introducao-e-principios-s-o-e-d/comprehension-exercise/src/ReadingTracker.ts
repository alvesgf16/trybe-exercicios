import Notificator from './Notificator';
import ConsoleNotification from './ConsoleNotification';

class ReadingTracker {
  private booksRead: number;

  constructor(
    private readingGoal: number,
    public notificator: Notificator = new ConsoleNotification(),
  ) {
    this.booksRead = 0;
    this.readingGoal = readingGoal;
    this.notificator = notificator;
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }

    this.notificator.sendNotification(
      'There are still some books to go!',
    );
  }
}

const readTracker = new ReadingTracker(20);
readTracker.trackReadings(12);
readTracker.trackReadings(9);
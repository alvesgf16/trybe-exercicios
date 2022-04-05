export default class Data {
  private _day: number;

  private _month: number;

  private _year: number;

  constructor(
    d: number,
    m: number,
    y: number,
  ) {
    const dateStr = `${y}-${m}-${d}`;

    if (new Date(dateStr).getDate() !== d) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = d;
      this._month = m;
      this._year = y;
    }
  }

  get day() {
    return this._day;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  getMonthName(): string {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return months[this._month - 1];
  }

  isLeapYear(): boolean {
    return this._year % 4 === 0 && (
      this._year % 100 !== 0
      || (this._year % 100 === 0 && this._year % 400 === 0)
    );
  }

  compare(d2: Data) {
    const thisDateStr = `${this._year}-${this._month}-${this._day}`;
    const d2DateStr = `${d2.year}-${d2.month}-${d2.day}`;
    const comparison = Date.parse(thisDateStr) - Date.parse(d2DateStr);

    return comparison === 0 ? 0 : comparison / Math.abs(comparison);
  }

  format(formatter: string) {
    const conditions: boolean[] = [
      (!formatter.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formatter.match(/m{2}/g) && !formatter.match(/M{1}/g)), // verifica se tem o mês na formatação
      (!formatter.match(/d{2}/g)), // verifica se tem o dia na formatação
    ];

    if (conditions.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formatter}`);
    }

    const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
    const month = this.month > 9 ? this.month.toString() : `0${this.month.toString()}`;
    const year = this.year.toString();

    const dateFormatter = formatter
      .replace('dd', day)
      .replace('mm', month)
      .replace('M', this.getMonthName())
      .replace('aaaa', year)
      .replace('aa', year.slice(-2));

    return dateFormatter;
  }
}

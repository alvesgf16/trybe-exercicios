import Employee from './Employee';
import Person from './Person';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  private _subject: Subject;

  private _registration: string;

  private _salary: number;

  private _admissionDate: Date = new Date();

  constructor(n: string, bD: Date, sl: number, sb: Subject) {
    super(n, bD);

    this._subject = sb;
    this._salary = sl;

    const r = this.generateRegistration();

    if (r.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres');

    this._registration = r;
  }

  get registration() {
    return this._registration;
  }

  get subject() {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error();

    this._salary = value;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    const now = new Date();

    if (value > now) throw new Error();

    this._admissionDate = value;
  }

  public generateRegistration(): string {
    const registrationAlgorithm: string = String(this.admissionDate.getTime() * (Math.random() + 1)).replace(/\W/g, '');
    return `EMP${registrationAlgorithm}`;
  }
}

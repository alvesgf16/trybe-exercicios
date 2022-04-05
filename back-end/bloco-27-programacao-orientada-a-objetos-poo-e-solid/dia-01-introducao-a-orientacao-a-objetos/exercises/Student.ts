export default class Student {
  private _registrationId: number;

  private _name: string;

  private _testGrades: number[];

  private _projectGrades: number[];

  constructor(
    r: number,
    n: string,
    tG: number[],
    pG: number[],
  ) {
    this._registrationId = r;
    this._name = n;
    this._testGrades = tG;
    this._projectGrades = pG;
  }

  totalGrade() {
    return this._testGrades.reduce((acc, cur) => acc + cur)
         + this._projectGrades.reduce((acc, cur) => acc + cur);
  }

  averageGrade() {
    return this.totalGrade() / (this._testGrades.length + this._projectGrades.length);
  }
}

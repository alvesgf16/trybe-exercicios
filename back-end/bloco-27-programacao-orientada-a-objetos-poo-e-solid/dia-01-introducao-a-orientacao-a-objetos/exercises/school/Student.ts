import Person from './Person';

export default class Student extends Person {
  private _enrollment: string;

  private _examsGrades: number[] = [];

  private _worksGrades: number[] = [];

  constructor(
    n: string,
    bD: Date,
  ) {
    super(n, bD);

    const enrollmentAlgorithm: string = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    const e: string = `STU${enrollmentAlgorithm}`;

    if (e.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres');

    this._enrollment = e;
  }

  get enrollment() {
    return this._enrollment;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas');

    this._examsGrades = value;
  }

  get worksGrades() {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos');

    this._worksGrades = value;
  }

  sumGrades() {
    return this._examsGrades.reduce((acc, cur) => acc + cur)
         + this._worksGrades.reduce((acc, cur) => acc + cur);
  }

  sumAverageGrade() {
    return this.sumGrades() / (this._examsGrades.length + this._worksGrades.length);
  }
}

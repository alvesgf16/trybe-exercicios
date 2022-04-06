export default class Person {
  private _name: string;

  private _birthDate: Date;

  constructor(n: string, bD: Date) {
    this._name = n;
    this._birthDate = bD;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres');

    this._name = value;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    const now = new Date();

    if (value > now) throw new Error('A data de nascimento não pode ser uma data no futuro');
    if ((now.getFullYear() - 120) > value.getFullYear()) throw new Error('A pessoa deve ter no máximo 120 anos');

    this._birthDate = value;
  }
}

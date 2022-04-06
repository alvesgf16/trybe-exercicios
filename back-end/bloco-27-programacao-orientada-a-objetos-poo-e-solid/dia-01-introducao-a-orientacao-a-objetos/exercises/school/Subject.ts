export default class Subject {
  private _name: string;

  constructor(n: string) {
    this._name = n;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres');

    this._name = value;
  }
}

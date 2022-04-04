class Person {
  name: string;

  private _weight: number;

  private _age: number;

  readonly height: number;

  constructor(n: string, h: number, w: number, a: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this._weight = w;
    this._age = a;
    this.height = h;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }

  getWeight() {
    return this._weight;
  }

  get age() {
    return this._age;
  }

  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }
}

const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);

// Alteração direta de variável pública
p1.name = 'Mariah';
// Acesso direto a variável pública
console.log(p1.name);
// Acesso a método público que manipula atributo privado
console.log(p1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(p2.age);
// Acesso a método público que manipula atributo privado
p2.birthday();
console.log(p2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
p2.age = 17;

console.log(p2.age);
// Leitura de atributo readonly
console.log(p1.height);

/*
Saída:
Mariah
58
18
19
17
171
*/

p2.age = 300;
console.log(p2.age);
// Saída: 17

export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function rhombus(lrgDiag: number, smlDiag: number): number {
  return (lrgDiag * smlDiag) / 2;
}

export function trapezium(lrgBase: number, smlBase: number, height: number): number {
  return ((lrgBase + smlBase) * height) / 2;
}

export function circle(radius: number): number {
  return Math.PI * (radius ** 2);
}
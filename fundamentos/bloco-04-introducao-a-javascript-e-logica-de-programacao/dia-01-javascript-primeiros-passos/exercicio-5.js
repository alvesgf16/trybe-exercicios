const isTriangle = (a, b, c) =>
  ((a < 0 || b < 0 || c < 0) ? 'Ângulos internos não podem ser negativos!' : (a + b + c === 180));

console.log(isTriangle(30, 60, 90));
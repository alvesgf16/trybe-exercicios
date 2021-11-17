const salarioBruto = 3000;
let aliquotaInss;
let aliquotaIr;

if (salarioBruto <= 1556.94) {
  aliquotaInss = 0.08 * salarioBruto;
} else if (salarioBruto <= 2594.92) {
  aliquotaInss = 0.09 * salarioBruto;
} else if (salarioBruto <= 5189.82) {
  aliquotaInss = 0.11 * salarioBruto;
} else {
  aliquotaInss = 570.88;
}

const salarioBase = salarioBruto - aliquotaInss;

if (salarioBase <= 1903.98) {
  aliquotaIr = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIr = 0.075 * salarioBase - 142.8;
} else if (salarioBase <= 3751.05) {
  aliquotaIr = 0.15 * salarioBase - 354.8;
} else if (salarioBase <= 4664.68) {
  aliquotaIr = 0.225 * salarioBase - 636.13;
} else {
  aliquotaIr = 0.275 * salarioBase - 869.36;
}

const salarioLiquido = salarioBase - aliquotaIr;

console.log(aliquotaInss, salarioBase, aliquotaIr, salarioLiquido);
import rl from 'readline-sync';

const units: {
  [index: string]: number;
} = {
  kg: 1000,
  hg: 100,
  dag: 10,
  g: 1,
  dg: 0.1,
  cg: 0.01,
  mg: 0.001,
};

function convert(value: number, baseUnit: string, conversionUnit: string): number {
  return value * (units[baseUnit] / units[conversionUnit]);
};

export function exec() {
  const value: number = rl.questionFloat('Digite o valor a ser convertido: ');
  
  const options: string[] = Object.keys(units);
  const baseUnitInput = rl.keyInSelect(options, 'Escolha uma unidade base: ');
  const baseUnit = options[baseUnitInput];
  const conversionUnitInput = rl.keyInSelect(options, 'Escolha uma unidade de conversão: ');
  const conversionUnit = options[conversionUnitInput];

  const convertedValue = convert(value, baseUnit, conversionUnit);
  
  return `${value}${baseUnit} é igual a ${convertedValue}${conversionUnit}`;
}
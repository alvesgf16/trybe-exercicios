import rl from 'readline-sync';

const units: {
  [index: string]: number;
} = {
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001,
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
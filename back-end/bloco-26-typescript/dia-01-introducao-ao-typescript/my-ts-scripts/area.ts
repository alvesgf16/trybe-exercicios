import rl from 'readline-sync';

const units: {
  [index: string]: number;
} = {
  'km²': 1000000,
  'hm²': 10000,
  'dam²': 100,
  'm²': 1,
  'dm²': 0.01,
  'cm²': 0.0001,
  'mm²': 0.000001,
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
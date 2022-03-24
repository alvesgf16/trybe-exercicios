import rl from 'readline-sync';

const units: {
  [index: string]: number;
} = {
  'km³': 1000000000,
  'hm³': 1000000,
  'dam³': 1000,
  'm³': 1,
  'dm³': 0.001,
  'cm³': 0.000001,
  'mm³': 0.000000001,
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
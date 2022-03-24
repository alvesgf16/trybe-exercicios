import rl from 'readline-sync';

function convert(
  value: number,
  fromUnit: number,
  toUnit: number,
  ): number {
    const exponent = (toUnit - fromUnit);

  return value * (10 ** exponent);
};

export function exec(units: string[]) {
  const value = rl.questionFloat('Digite o valor a ser convertido: ');
  const fromUnit = rl.keyInSelect(units, 'Escolha uma unidade base: ');
  const toUnit = rl.keyInSelect(units, 'Escolha uma unidade de conversão: ');

  const convertedValue = convert(value, fromUnit, toUnit);
  
  console.log(`${value}${units[fromUnit]} é igual a ${convertedValue}${units[toUnit]}`);
}

export default { exec };

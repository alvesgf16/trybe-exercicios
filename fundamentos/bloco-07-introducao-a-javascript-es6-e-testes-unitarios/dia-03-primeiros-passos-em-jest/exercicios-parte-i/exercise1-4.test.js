function myFizzBuzz(num) {
  const fizzBuzzConditions = [
    typeof num !== 'number',
    num % 3 === 0 && num % 5 === 0,
    num % 3 === 0,
    num % 5 === 0,
  ];

  const fizzBuzzResponses = [false, 'fizzbuzz', 'fizz', 'buzz'];
  const firstMetCondition = fizzBuzzConditions.find((condition) => condition);
  if (firstMetCondition) return fizzBuzzResponses[fizzBuzzConditions.indexOf(firstMetCondition)];

  return num;
}

describe(
  'A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por'
  + ' 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por '
  + '5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não'
  + 'seja um número',
  () => {
    test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado',
      () => { expect(myFizzBuzz(15)).toBe('fizzbuzz'); });
    test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado',
      () => { expect(myFizzBuzz(9)).toBe('fizz'); });
    test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado',
      () => { expect(myFizzBuzz(25)).toBe('buzz'); });
    test(
      'Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o'
      + 'esperado', () => { expect(myFizzBuzz(4)).toBe(4); },
    );
    test(
      'Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado',
      () => { expect(myFizzBuzz('15')).toBe(false); },
    );
  },
);

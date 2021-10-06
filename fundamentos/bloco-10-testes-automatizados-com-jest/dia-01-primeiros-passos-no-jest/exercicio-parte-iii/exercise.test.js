// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const testException = (condition, errorMessage) => {
  if (condition) throw new Error(errorMessage);
}

const searchEmployee = (id, detail) => {
  const searchedEmployee = professionalBoard.find((employee) => employee.id === id);
  
  testException(searchedEmployee === undefined, 'ID não identificada');
  testException(!Object.keys(searchedEmployee).includes(detail), 'Informação indisponível');

  return searchedEmployee[detail];
}

test('Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele ( firstName , lastName , specialities )', () => {
  expect(searchEmployee).toBeDefined();
  expect(typeof searchEmployee).toBe('function');
});

test('Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada', () => {
  expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
  expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
  expect(searchEmployee('9852-2-2', 'firstName')).toBe('Jeff');
  expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
  expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
});

test('Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada"', () => {
  expect(() => searchEmployee('1234-5', 'firstName')).toThrow();
  expect(() => searchEmployee('6789-0', 'lastName')).toThrowError(new Error('ID não identificada'));
});

test('Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" .', () => {
  expect(() => searchEmployee('9852-2-2', 'email')).toThrow();
  expect(() => searchEmployee('1256-4', 'role')).toThrowError(new Error('Informação indisponível'));
})
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

test('Compare dois objetos para verificar se são idênticos ou não', () => {
  expect(obj1).toEqual(obj2);
});
test('Compare dois objetos para verificar se são idênticos ou não', () => {
  expect(obj1).not.toEqual(obj3);
});
test('Compare dois objetos para verificar se são idênticos ou não', () => {
  expect(obj2).not.toEqual(obj3);
});
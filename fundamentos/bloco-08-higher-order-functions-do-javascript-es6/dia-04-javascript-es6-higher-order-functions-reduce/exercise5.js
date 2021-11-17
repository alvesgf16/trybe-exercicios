const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, name) => `${acc}${name}`).split('')
    .filter((char) => char === 'a' || char === 'A').length;
}

assert.deepStrictEqual(containsA(), 20);
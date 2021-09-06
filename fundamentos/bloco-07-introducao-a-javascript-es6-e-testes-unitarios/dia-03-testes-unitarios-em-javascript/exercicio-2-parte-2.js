const assert = require('assert');

const wordLengths = (array) => {
  let lengths = [];

  array.forEach((element) => {
    lengths.push(element.length);
  });

  return lengths;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
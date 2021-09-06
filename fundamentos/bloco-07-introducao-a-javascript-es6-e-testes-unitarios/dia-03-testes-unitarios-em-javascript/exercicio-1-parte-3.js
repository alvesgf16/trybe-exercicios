const assert = require('assert');

const greetPeople = (people) => {
  let greetings = [];

  for (const person in people) {
    let greeting = 'Hello ';
    greetings.push(greeting += people[person]);
  }

  return greetings;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
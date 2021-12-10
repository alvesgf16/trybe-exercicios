const people = require('./data');

people.sort((a, b) => b.age - a.age);

console.log(people);
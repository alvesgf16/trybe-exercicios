const people = require('./data');

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((element) => element === name);

console.log(hasName(names, 'Ana'));

const verifyAges = (arr, minimumAge) => arr.every((element) => element.age >= minimumAge);

console.log(verifyAges(people, 18));
const names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge', 
};

for (const person in names) {
  if ({}.hasOwnProperty.call(names, person)) {
    console.log(`Olá ${names[person]}`);
  }
}

const car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020,
};
  
for (const feature in car) {
  if ({}.hasOwnProperty.call(car, feature)) {
    console.log(`${feature}: ${car[feature]}`);
  }
}
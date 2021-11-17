const n = 5;
let numberOfAsterisksInLine = 1;

for (let line = 1; line <= n; line += 2) {
  let str = '';

  for (let blankSpaces = 1; blankSpaces <= (n - numberOfAsterisksInLine) / 2; blankSpaces += 1) {
    str += ' ';
  }
  
  for (let asterisks = 1; asterisks <= numberOfAsterisksInLine; asterisks += 1) {
    str += '*';
  }

  console.log(str);
  numberOfAsterisksInLine += 2;
}
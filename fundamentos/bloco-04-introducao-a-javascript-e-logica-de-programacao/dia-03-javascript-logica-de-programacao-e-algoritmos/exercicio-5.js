const n = 9;
const numberOfAsterisksOnTop = 1;
let numberOfAsterisksInLine = 1;
let numberOfSpacesInTheMiddle = 1;

for (let i = 1; i <= n; i += 2) {
  let str = '';

  if (i === numberOfAsterisksOnTop || i === n) {
    for (let blankSpaces = 1; blankSpaces <= (n - numberOfAsterisksInLine) / 2; blankSpaces += 1) {
      str += ' ';
    }

    for (let asterisks = 1; asterisks <= numberOfAsterisksInLine; asterisks += 1) {
      str += '*';
    }

    console.log(str);
  } else {
    for (let blankSpaces = 1; blankSpaces <= (n - numberOfAsterisksInLine) / 2; blankSpaces += 1) {
      str += ' ';
    }

    str += '*';
    
    for (let blankSpaces = 1; blankSpaces <= numberOfSpacesInTheMiddle; blankSpaces += 1) {
      str += ' ';
    }

    str += '*';

    console.log(str);
    numberOfSpacesInTheMiddle += 2;
  }
  numberOfAsterisksInLine += 2;
}

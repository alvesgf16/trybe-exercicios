// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function getMostRepeatedInt(array) {
    let timesRepeated = {};
    let mostRepeatedInt;
    let timesMostRepeated = 0;

    for (let number = 0; number < array.length; number += 1) {
        if (timesRepeated[array[number]]) {
            timesRepeated[array[number]] += 1;
        } else {
            timesRepeated[array[number]] = 1;
        }
    }

    for (number in timesRepeated) {
        if (timesRepeated[number] > timesMostRepeated) {
            timesMostRepeated = timesRepeated[number];
            mostRepeatedInt = number;
        } 
    }

    return console.log(mostRepeatedInt);
}

getMostRepeatedInt([2, 3, 2, 5, 8, 2, 3]);
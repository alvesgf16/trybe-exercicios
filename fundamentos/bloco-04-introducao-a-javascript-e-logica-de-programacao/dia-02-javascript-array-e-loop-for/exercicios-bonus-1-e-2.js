const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function sortNumbers(index, secondIndex) {
  const position = numbers[index];
  numbers[index] = numbers[secondIndex];
  numbers[secondIndex] = position;
  console.log(numbers);
}

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    // Exercício bônus 1: Ordene o array numbers em ordem crescente e imprima seus valores;
    if (numbers[index] < numbers[secondIndex]) {
      sortNumbers(index, secondIndex);
    }

    // Exercício bônus 2: Ordene o array numbers em ordem decrescente e imprima seus valores;
    if (numbers[index] > numbers[secondIndex]) {
      sortNumbers(index, secondIndex);
    }
  }
} 

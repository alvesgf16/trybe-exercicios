const sumRandomNumbers = () => {
  const randomNumbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50 + 1)
  );

  const sum = randomNumbers.map((number) => number ** 2)
                            .reduce((acc, cur) => acc += cur);

  if (sum >= 8000) {
    throw new Error();
  }
  
  return sum
}

const divideAndSum = (sum) => console.log([2, 3, 5, 10].map((number) => sum / number)
                                           .reduce((acc, cur) => acc += cur));

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromDivisions = await divideAndSum(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();
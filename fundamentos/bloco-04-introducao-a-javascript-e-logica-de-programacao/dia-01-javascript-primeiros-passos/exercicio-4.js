const isPositive = (a) => {
  if (a > 0) {
    return 'positive';
  } if (a < 0) {
    return 'negative';
  } 
  return 'zero';
};

console.log(isPositive(0));

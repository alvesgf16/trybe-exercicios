const returnTheBigger = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  }
  
  if (b > a && b > c) {
    return b;
  } 
  
  return c;
};

console.log(returnTheBigger(4, 3, 7));

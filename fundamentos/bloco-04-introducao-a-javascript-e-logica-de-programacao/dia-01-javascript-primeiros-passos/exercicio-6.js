const movementPattern = (piece) => {
  const movementChart = {
    pawn: 'forward one square',
    knight: 'in an \'L\' shape',
    bishop: 'diagonally',
    rook: 'horizontally or vertically',
    queen: 'any direction',
    king: 'one square in any direction',
  };
   
  return movementChart[piece] ? movementChart[piece] : 'not a valid piece';
};

console.log(movementPattern('pawn'));
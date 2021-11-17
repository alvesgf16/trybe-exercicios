const movementPattern = (piece) => {
  if (piece.toLowerCase() === 'pawn') {
    return 'forward one square';
  } if (piece.toLowerCase() === 'knight') {
    return 'in an \'L\' shape';
  } if (piece.toLowerCase() === 'bishop') {
    return 'diagonally';
  } if (piece.toLowerCase() === 'rook') {
    return 'horizontally or vertically';
  } if (piece.toLowerCase() === 'queen') {
    return 'any direction';
  } if (piece.toLowerCase() === 'king') {
    return 'one square in any direction';
  } 
  return 'not a valid piece';
};

console.log(movementPattern('RONALDO'));
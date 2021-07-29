let piece = "ronaldo";
let movement;

if (piece.toLowerCase() === "pawn") {
    movement = "forward one square";
} else if (piece.toLowerCase() === "knight") {
    movement = "in an 'L' shape";
} else if (piece.toLowerCase() === "bishop") {
    movement = "diagonally";
} else if (piece.toLowerCase() === "rook") {
    movement = "horizontally or vertically";
} else if (piece.toLowerCase() === "queen") {
    movement = "any direction";
} else if (piece.toLowerCase() === "king") {
    movement = "one square in any direction";
} else {
    movement = "not a valid piece";
}

console.log(movement)
let piece = "PAWN";

if (piece.toLowerCase() == "pawn") {
    console.log("forward one square");
} else if (piece.toLowerCase() == "knight") {
    console.log("in an 'L' shape");
} else if (piece.toLowerCase() == "bishop") {
    console.log("diagonally");
} else if (piece.toLowerCase() == "rook") {
    console.log("horizontally or vertically");
} else if (piece.toLowerCase() == "queen") {
    console.log("any direction");
} else if (piece.toLowerCase() == "king") {
    console.log("one square in any direction");
}
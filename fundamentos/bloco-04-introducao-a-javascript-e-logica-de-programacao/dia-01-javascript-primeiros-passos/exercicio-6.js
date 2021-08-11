function movementPattern(piece) {
    if (piece.toLowerCase() === "pawn") {
        return "forward one square";
    } else if (piece.toLowerCase() === "knight") {
        return "in an 'L' shape";
    } else if (piece.toLowerCase() === "bishop") {
        return "diagonally";
    } else if (piece.toLowerCase() === "rook") {
        return "horizontally or vertically";
    } else if (piece.toLowerCase() === "queen") {
        return "any direction";
    } else if (piece.toLowerCase() === "king") {
        return "one square in any direction";
    } else {
        return "not a valid piece";
    }
}


console.log(movementPattern("RONALDO"));
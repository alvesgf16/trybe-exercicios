import ChessBoard from './ChessBoard';
import MySQLDatabase from './MySQLDatabase';

const db = new MySQLDatabase();
const board = new ChessBoard(['A1', 'A2', 'B1', 'B2'], db);
board.save();
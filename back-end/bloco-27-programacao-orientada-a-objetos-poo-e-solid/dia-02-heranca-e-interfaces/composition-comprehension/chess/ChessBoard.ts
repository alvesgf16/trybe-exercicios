import Database from './Database';
import GenericBoard from './GenericBoard';

export default class ChessBoard extends GenericBoard {
  constructor(
    public houses: string[],
    protected database: Database,
    // Parâmetros específicos de um tabuleiro de xadrez
  ) {
    super(houses, database);
    // Implementação específica de um tabuleiro de xadrez
  }
}
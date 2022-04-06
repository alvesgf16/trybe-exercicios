// Aqui vamos compor a classe com o nosso Database: passamos um objeto

import Board from './Board';
import Database from './Database';

// do tipo Database para o construtor da classe.
export default class GenericBoard implements Board {
  // Finja que faz sentido as casas do tabuleiro serem um array de strings
  constructor(public houses: string[], protected database: Database) {}

  public save() {
    this.database.save(this.houses);
  }
}
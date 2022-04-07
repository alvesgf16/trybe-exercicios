import Character from './Character';

export default class LongRangeCharacter extends Character {
  constructor(
    private name: string,
    private specialMoveName: string,
  ) {
    super();
  }
  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(`Hi, I'm ${this.name}. I can attack from a long range. `);
  }
  
  specialMove() {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(this.specialMoveName);
  }
}
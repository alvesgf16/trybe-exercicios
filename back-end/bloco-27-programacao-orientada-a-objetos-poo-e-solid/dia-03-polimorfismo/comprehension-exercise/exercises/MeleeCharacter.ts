import Character from './Character';

export default class MeleeCharacter extends Character {
  constructor(
    private name: string,
    private specialMoveName: string,
  ) {
    super();
  }
  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(`Hi, I'm ${this.name}. I attack at close range.`);
  }
  
  specialMove() {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(this.specialMoveName);
  }
}
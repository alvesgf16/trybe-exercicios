import ICharacter from './ICharacter';

export default interface IDbCharacter extends ICharacter {
  id: number;
}

const db: IDbCharacter[] = [];

export { db };
import Character from './Character';
import CharacterService from './CharacterService';
import LocalDbModel from './LocalDbModel';
import LongRangeCharacter from './LongRangeCharacter';
import MeleeCharacter from './MeleeCharacter';
import MockedDbModel from './MockedDbModel';

function characterPresentation(character: Character) {
  character.talk();
  character.specialMove();
}

const yoshi = new MeleeCharacter('Yoshi', 'Super Dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

characterPresentation(yoshi);
characterPresentation(samus);

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockedDbModel());
B.getAll().then(console.log);
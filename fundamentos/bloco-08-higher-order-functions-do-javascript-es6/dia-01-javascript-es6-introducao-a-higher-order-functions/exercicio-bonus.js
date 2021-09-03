const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const dragonAttack = () => getRandomIntInclusive(15, dragon.strength);
const warriorAttack = () => getRandomIntInclusive(warrior.strength, warrior.weaponDmg * warrior.strength);
const mageAttack = () => ({
  damage: mage.mana >= 15 ? getRandomIntInclusive(mage.intelligence, mage.intelligence * 2) : 0,
  manaConsumption: 15,
});

const gameActions = {
  warriorTurn: (warriorAttack) => {
    warriorAttack = warriorAttack();
    dragon.healthPoints -= warriorAttack;
    warrior.damage = warriorAttack;
  },
  mageTurn: (mageAttack) => {
    mageAttack = mageAttack()
    dragon.healthPoints -= mageAttack.damage;
    mage.damage = mageAttack.damage;
    mage.mana -= mageAttack.manaConsumption;
  },
  dragonTurn: (dragonAttack) => {
    dragonAttack = dragonAttack();
    mage.healthPoints -= dragonAttack;
    warrior.healthPoints -= dragonAttack;
    dragon.damage = dragonAttack;
  },
  updateStats: function() {
    this.warriorTurn(warriorAttack);
    this.mageTurn(mageAttack);
    this.dragonTurn(dragonAttack);
    return battleMembers;
  }
};

console.log(gameActions.updateStats());
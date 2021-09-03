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
const mageAttack = () => {
  const minDmg = mage.intelligence
  const failedAttack = {
    manaSpent: 0,
    damage: 'Not enough mana...',
  };

  const sucessfulAttack = {
    manaSpent: 15,
    damage: getRandomIntInclusive(minDmg, minDmg * 2),
  }
  
  return mage.mana >= 15 ? sucessfulAttack : failedAttack;
}

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack();
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack()
    dragon.healthPoints -= mageTurnStats.damage;
    mage.damage = mageTurnStats.damage;
    mage.mana -= mageTurnStats.manaSpent;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack();
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  updateStats: function() {
    this.warriorTurn(warriorAttack);
    this.mageTurn(mageAttack);
    this.dragonTurn(dragonAttack);
    return battleMembers;
  }
};

console.table(gameActions.updateStats());
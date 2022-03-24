import rl from 'readline-sync';

const options = ['length', 'mass', 'capacity', 'area', 'volume'];
const script = rl.keyInSelect(options, 'Qual conversão você deseja realizar?');
require(`./${options[script]}`);
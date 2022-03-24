const rl = require('readline-sync');

const options = ['length', 'mass', 'capacity', 'area', 'volume'];
const scriptInput = rl.keyInSelect(options, 'Qual conversão você deseja realizar?');
const result = require(`./${options[scriptInput]}.ts`);
console.log(result.exec());
const readline = require('readline-sync');
const fs = require('fs').promises;

async function replaceWord() {
  try {
      const pathway = readline.question('Digite o caminho para o arquivo: ');
      const file = await fs.readFile(pathway, 'utf8');
      const wordToReplace = readline.question('Digite a palavra a ser substituída: ');
      const replacement = readline.question('Digite a nova palavra: ');
      const newFile = file.replace(new RegExp(wordToReplace, 'g'), replacement);
      console.log(newFile);
      const destinationFile = readline.question('Digite o caminho do arquivo de destino: ');
      fs.writeFile(destinationFile, newFile);
    } catch (e) {
      console.log('Arquivo inexistente');
    }
}

replaceWord();
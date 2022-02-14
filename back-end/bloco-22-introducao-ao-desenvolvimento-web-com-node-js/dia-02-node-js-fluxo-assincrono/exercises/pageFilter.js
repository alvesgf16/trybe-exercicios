const readline = require('readline-sync');

const fs = require('fs').promises;

async function filterPage() {
  try {
      const pathway = await readline.question('Digite o caminho para o arquivo: ');
      const file = await fs.readFile(pathway, 'utf8');
      console.log(file);
    } catch (e) {
      console.log('Arquivo inexistente');
    }
}

filterPage();

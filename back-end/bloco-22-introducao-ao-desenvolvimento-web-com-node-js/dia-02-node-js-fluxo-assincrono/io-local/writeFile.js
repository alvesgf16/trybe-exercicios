const fs = require('fs').promises;

// async function main() {
//   try {
//     await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:',
// A flag wx abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado
  // { flag: 'wx' }
)
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  //   } catch (err) {
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
    //   }
    // }
  });

// main()



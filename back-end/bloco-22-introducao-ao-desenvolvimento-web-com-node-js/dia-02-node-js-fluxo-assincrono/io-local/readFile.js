// const fs = require('fs');
const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

// fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
fs.readFile(nomeDoArquivo, 'utf8')
// Promise.all([
//   fs.readFile('file1.txt'),
//   fs.readFile('file2.txt'),
//   fs.readFile('file3.txt'),
// ])
//  if (!err) {
  .then((data) => {
// .then(([file1, file2, file3]) => {
//   const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Conteúdo do arquivo: ${data}`);
//  console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
//   } else {
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//   }
  });

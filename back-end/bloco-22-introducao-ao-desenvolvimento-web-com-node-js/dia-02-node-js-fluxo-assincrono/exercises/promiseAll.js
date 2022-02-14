const fs = require('fs').promises;

async function joinFiles() {
  const splitSentence = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const sentenceFiles = splitSentence.map((word, index) => fs.writeFile(`./file${index + 1}.txt`, word));
  
  await Promise.all(sentenceFiles);
  
  const fileIndexes = [1, 2, 3, 4, 5];
  const files = fileIndexes.map((index) => fs.readFile(`file${index}.txt`));
  const splitSentence2 = await Promise.all(files);
  const jointSentence = splitSentence2.join(' ');
  fs.writeFile('./fileAll.txt', jointSentence);
}

joinFiles();
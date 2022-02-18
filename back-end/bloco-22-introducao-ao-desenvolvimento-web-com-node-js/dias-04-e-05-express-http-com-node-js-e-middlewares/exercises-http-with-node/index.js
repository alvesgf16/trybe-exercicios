const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express(); // 1
app.use(bodyParser.json());

const simpsons = JSON.parse(fs.readFileSync('./simpsons.json', 'utf8'));

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
}); // 2

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age <= 17) return res.status(401).json({ message: 'Unauthorized '});

  res.status(200).json({ message: `Hello, ${name}` });
});

app.put('users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', (_req, res) => {
  try {
    const simpsonsNames = simpsons.map(({ name }) => name);
    res.status(200).json(simpsonsNames);
  } catch (e) {
    res.status(500);
  }
});

app.get('/simpsons/:id', (req, res) => {
  try {
    const { id: simpsonId } = req.params;
    const simpson = simpsons.find(({ id }) => id === simpsonId);
    if (!simpson) return res.status(404).json({ message: 'simpson not found' });
    res.status(200).json(simpson);
  } catch (e) {
    res.status(500);
  }
})

app.post('/simpsons', (req, res) => {
  try {
    const { id: simpsonId, name } = req.body;
    if (simpsons.some(({ id }) => id === simpsonId)) return res.status(409).json({ message: 'id already exists' });
    const updatedSimpsons = [...simpsons, { id: simpsonId, name }];
    fs.writeFileSync('./simpsons.json', JSON.stringify(updatedSimpsons));
    res.status(204).end();
  } catch (e) {
    res.status(500);
  }
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3
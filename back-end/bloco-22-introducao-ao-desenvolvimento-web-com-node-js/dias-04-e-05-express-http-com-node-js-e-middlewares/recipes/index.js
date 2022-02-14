const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (_req, res) {
  res.send('open!')
});

// Esta rota passa pelo middleware de autenticação!
app.get('/closed', authMiddleware, function(_req, res) {
  res.send('closed!');
})

// app.get('/validateToken', function (req, res) {
//   const token = req.headers.authorization;
//   if (token.length !== 16) return res.status(401).json({ message: 'Invalid Token!' });

//   res.status(200).json({ message: 'Valid Token!' });
// });

const recipesRouter = require('./recipesRouter');
const drinksRouter = require('./drinksRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);
app.use('/drinks', drinksRouter);

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(3001, () => { console.log('Aplicação ouvindo na porta 3001'); });

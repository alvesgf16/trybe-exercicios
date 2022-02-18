const express = require('express');
const bodyParser = require('body-parser');
const { application } = require('express');

const app = express();
app.use(bodyParser.json());

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;

})

// Crie uma rota POST /user/register que receba uma requisição que envie username , email e password no body da requisição, onde:
// username deve ter mais de 3 caracteres;
// email deve ter o formato email@mail.com;
// password deve conter no mínimo 4 caracteres e no máximo 8 (todos números);
// Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" } ;
// Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 201 e { "message": "user created" } ;
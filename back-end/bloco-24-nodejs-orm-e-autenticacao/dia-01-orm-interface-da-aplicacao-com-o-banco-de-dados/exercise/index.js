const express = require('express');
const bodyParser = require("body-parser");

const bookController = require('./controllers/bookController');
const authorController = require('./controllers/authorController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', bookController.findAll);
app.get('/book/:id', bookController.findById);
app.get('/author/:name', authorController.getByAuthorName);
app.post('/book', bookController.create);
app.post('/book/:id', bookController.overwrite);
app.delete('/book/:id', bookController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
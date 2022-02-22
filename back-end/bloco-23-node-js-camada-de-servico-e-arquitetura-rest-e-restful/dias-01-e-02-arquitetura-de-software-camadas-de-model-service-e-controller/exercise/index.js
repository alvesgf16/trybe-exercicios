const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const User = require('./controllers/User');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());

app.post('/user', rescue(User.create));
app.get('/user', rescue(User.getAll));
app.get('/user/:id', rescue(User.findById));
app.put('/user/:id', rescue(User.update));

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});

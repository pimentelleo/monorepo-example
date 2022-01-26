const alfa = require('./components/alfabetica.js');
const aniver = require('./components/aniversario.js');
//const setor = require('./components/funcionarios.js');
//const ramais = require('./components/ramais.js');
const port = 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/alfabetica', (req, res) => res.send(alfa));
app.get('/aniversario', (req, res) => res.send(aniver));

app.listen(port, () => console.log('Example app listening on port 3000!'));
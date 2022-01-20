const aniver = require('./components/aniversariante.js');
const port = 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/aniversariantes', (req, res) => res.send(aniver));

app.listen(port, () => console.log('Example app listening on port 3000!'));
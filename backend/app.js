const funcionarios = require('./components/funcionarios.js');
const port = 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/funcionarios', (req, res) => res.send(funcionarios);

app.listen(port, () => console.log('Example app listening on port 3000!'));
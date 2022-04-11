const port = 3000;
const express = require('express');
const app = express();
const userData = require('./components/funcionarios.js')
var cors = require('cors')


const corsOptions = {}

app.use(cors())

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/funcionarios', (req, res) => res.send(userData));

app.listen(port, () => console.log('Example app listening on port 3000!'));
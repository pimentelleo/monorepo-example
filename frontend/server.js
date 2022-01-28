const express = require('express');
const app = express();
const port = 8080;

app.use('/calculadora', express.static('src/calculadora'));
app.use('/funcionarios', express.static('src/funcionarios'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

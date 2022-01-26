const worker = require('../workers.js')

let atualdate = new Date().getMonth();

function birthday(a) {
    if (a.nascimento == atualdate){
        return a.nascimento + 1
    } else if (a.nascimento != atualdate) {
        return a.nascimento = 0
    }
}

const aniver = worker.sort(birthday);

module.exports = aniver;

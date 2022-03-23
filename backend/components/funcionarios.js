const database = require('../database.json')

function getUsers(){
    return database[1];
}

module.exports = getUsers();
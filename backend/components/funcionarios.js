const database = require('../database.js')

function getUsers(){
  return database;
}
module.exports = getUsers();
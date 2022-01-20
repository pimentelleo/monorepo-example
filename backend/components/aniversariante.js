const database = require('../database.js')

function sortUsers(x, y){
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
}
const aniver = database.sort(sortUsers);

module.exports = aniver;
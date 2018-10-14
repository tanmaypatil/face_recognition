/*const fs = require('fs');
var data=fs.readFileSync('./players.json', 'utf8');
var players = JSON.parse(data);*/

let players = require('./players.json');
//let players = JSON.parse(pl);
console.log(players);
input = 'msd';

for ( let val of players) {
    console.log(val);
    if(val.tag === input ) {
       console.log(val.fullName);
    }
}


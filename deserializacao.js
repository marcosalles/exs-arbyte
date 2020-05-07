
var fs = require('fs');

var arquivoDoBulbasauro = 'data/bulbasaur.json';
var bulbasauroSerializado = fs.readFileSync(arquivoDoBulbasauro);

var bulbasauro = JSON.parse(bulbasauroSerializado);

console.log(bulbasauro);

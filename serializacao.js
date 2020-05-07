
var fs = require('fs');

var lasanha = {}; // == new Object()
lasanha.massa = 'comum';
lasanha.molho = 'bolonhesa';
lasanha.recheio = ['presunto', 'queijo'];

var lasanha2 = {}; // == new Object()
lasanha2.massa = 'integral';
lasanha2.molho = 'espinafre';
lasanha2.recheio = ['ricota', 'cottage'];
lasanha2.cobertura = 'queijo ralado';

var arquivoDaLasanha = 'data/lasanha.json';

// var lasanhas = [ lasanha, lasanha2 ];
var lasanhas = {};
lasanhas['lasanha 1'] = lasanha;
lasanhas['lasanha 2'] = lasanha2;

var lasanhasSerializadas = JSON.stringify(lasanhas);
console.log(lasanhasSerializadas);
// fs.writeFileSync(arquivoDaLasanha, lasanhasSerializadas);

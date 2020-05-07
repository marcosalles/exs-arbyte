/*

*/

var fs = require('fs');

// objetos
var objeto = new Object();

objeto['tipo'] = 'outro tipo';

objeto['formas'] = ['redondo', 'quadrado', 'triangular'];

var outroObjeto = new Object();
objeto[outroObjeto] = 'Jeff';

var maisUmObjeto = new Object();
objeto[maisUmObjeto] = 'Max';

console.log(objeto);


// propriedades com nome
var meuCarro = new Object();

var nomeDaPropriedade = 'marca';
meuCarro[nomeDaPropriedade] = 'Ford';

nomeDaPropriedade = 'modelo';
meuCarro[nomeDaPropriedade] = 'Mustang';

meuCarro.marca = 'Mitsubishi';

console.log(meuCarro);

// objetos dentro de objetos
var porta = new Object();
meuCarro.porta = porta;

porta.vidro = 'fosco';

meuCarro.cores = ['vermelho', 'preto'];

console.log(meuCarro);

// serialização
var meuCarroEmString = JSON.stringify(meuCarro);
console.log(meuCarroEmString);

// salvar em arquivo
fs.writeFileSync('data/carro.json', meuCarroEmString);

// leitura de arquivo
var carroEmString = fs.readFileSync('data/carro.json');

// desserialização
var carro = JSON.parse(carroEmString);

// functions usando objetos
function trocaOVidroDoCarro(carro, tipoDeVidro) {
	carro.porta.vidro = tipoDeVidro;
}
trocaOVidroDoCarro(carro, 'blindado');
console.log(carro);

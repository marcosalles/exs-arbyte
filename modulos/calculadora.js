var rs = require('readline-sync');
var math = require('./matematica');

function quadrado(numero) {
	return math.multiplica(numero, numero);
}

function pedeUmNumeroElevaAoQuadrado() {
	var numero = rs.questionInt('Que numero quer elevar ao quadrado? ');
	return quadrado(numero);
}

exports.quadrado = quadrado;
exports.pedeUmNumeroElevaAoQuadrado = pedeUmNumeroElevaAoQuadrado;
exports.multiplicacao = math.multiplica;

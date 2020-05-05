/*
Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu
volume (v = 4/3.pi.R^3).

Então solicite ao usuário o raio da esfera e utilize a função para exibir o resultado.
*/

var rs = require('readline-sync');

function calculaVolume(rs) {
	var raio = rs.questionFloat('Raio da esfera: ');
	var volume = 4 / 3 * Math.PI * (raio ** 3);
	return volume;
}

var volume = calculaVolume(rs);
console.log('Volume da esfera: ' + volume.toFixed(2));


function calculaMedia(numerosRecebidos) { // [5,7,3,9,10].length = 5
	var soma = 0; //5 -> 12 => 12+3 => ...
	for (var contador = 0; contador < numerosRecebidos.length; contador++) {
		soma = soma + numerosRecebidos[contador];
	}
	var media = soma / numerosRecebidos.length;
	return media;
}

module.exports = calculaMedia;
// exports.calculaMedia = calculaMedia;

function soma(n1, n2) {
	return n1 + n2;
}

function divide(n1, n2) {
	return n1 / n2;
}

function multiplica(n1, n2) {
	return n1 * n2;
}

function subtrai(n1, n2) {
	return n1 - n2;
}

function fatorial(n) {
	var resultado = 1;
	for (var i = 2; i <= n; i++) {
		resultado *= i;
	}
	return resultado;
}

exports.soma = soma;
exports.divide = divide;
exports.multiplica = multiplica;
exports.subtrai = subtrai;
exports.fatora = fatorial;

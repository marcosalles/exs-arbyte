/*
Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor
lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na
condição IF.
*/

function ehPrimo(numero) {
	var ehPrimo = true;
	for (var i = 2; i < numero; i++) {
		if (numero % i == 0) {
			ehPrimo = false;
		}
	}
	return ehPrimo;
}

var rs = require('readline-sync');

var num = rs.questionInt('Digite um numero maior que zero: ');

// var dizQueEhPrimo = ehPrimo(num);
// if (dizQueEhPrimo) {
if (ehPrimo(num)) {
	console.log('É primo');
} else {
	console.log('Não é primo');
}

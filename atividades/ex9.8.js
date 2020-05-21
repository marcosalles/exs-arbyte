/*
Faça uma função que receba um número e retorne se é perfeito ou não.
Após isso solicite ao usuário para inserir um número e imprimir se é perfeito ou não
utilizando a função e imprimindo o resultado no final.
OBS: Um número perfeito é aquele que a soma do seus divisores (auto excluindo) é
igual a ele mesmo
Exemplo 6 possui os seguintes divisores
1 + 2 + 3 = 6
*/

// 6 % 3 => 2 resto 0
// 10 % 3 => 3 resto 1
function ehPerfeito(n) {
	var soma = 0;
	for (var divisor = 1; divisor < n; divisor++) {
		if (n % divisor == 0) {
			soma = soma + divisor;
			// console.log(divisor);
		}
	}
	// console.log('soma', soma);
	if (soma == n) {
		return true;
	} else {
		return false;
	}
}

var rs = require('readline-sync');
var numero = rs.questionInt('Digite um número pra saber se é perfeito: ');
var perfeito = ehPerfeito(numero);
if (perfeito == true) {
	console.log(numero + ' é perfeito');
} else {
	console.log(numero + ' não é perfeito');
}

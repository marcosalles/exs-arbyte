/*
(OBRIGATÓRIO) Escreva um programa que passe por todos os números de 1 a 50 e
para cada um deles imprima na tela se o número é par ou ímpar. Caso o número
também seja primo, o programa deve dizer que ele é primo. (um número primo é um
número que só é divisível por ele mesmo e por 1). Dica: Neste exercício você pode
precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de
um loop.
*/

var n1 = 1;
var n2 = 50;

while (n1 <= n2) {
	// n1=9 => [2,3,4,5,6,7,8]
	// 9%2  4, 1
	// 9%3  3, 0
	// 9%4  2, 1
	// 9%5  1, 2
	// 9%6	1, 1

	var ehPrimo = true;
	var divisor = 2;
	while (divisor < n1) {
		if (n1 % divisor == 0) {
			// nao eh primo
			ehPrimo = false;
		}
		divisor++;
	}

	if (n1 % 2 == 0) {
		if (ehPrimo) {
			console.log(n1 + ' é par e é primo');
		} else {
			console.log(n1 + ' é par');
		}
	} else {
		if (ehPrimo) {
			console.log(n1 + ' é impar e é primo');
		} else {
			console.log(n1 + ' é impar');
		}
	}
	n1++;
}

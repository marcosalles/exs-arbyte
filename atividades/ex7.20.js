

/*
Faça um algoritmo que pergunta para o usuário se ele quer criptografar ou
descriptografar.
Utilize como criptografia a cifra de césar
Exemplo ->
Entrada : ARBYTE
SAIDA: DUEBWH
Caso o usuario opte por criptografar o algoritmo deve aplicar a cifra de césar e
mostrar o valor criptografado
Caso o usuário opte por descriptografar o algoritmo deve fazer a engenharia reversa
e retorna ao valor antes de criptografia.
Utilize todo o conhecimento até aqui pra desenvolver este algoritmo
*/

/*
ARBYTE
ABCDEFGHIJKLMNOPQRSTUVWXYZABC
*/
var rs = require('readline-sync');

var querCriptografar = rs.keyInYN('Quer criptografar (Y) ou descriptografar (N)?');
var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABC';

// ['A', 'B', 'C', 'D' ... 'C']
// ['A', 'r', 'b', 'y', 't', 'e']
if (querCriptografar) {
	// criptografa
	var palavra = rs.question('Digite uma palavra para criptografar: ').toUpperCase().split('');
	for (var i = 0; i < palavra.length; i++) {
		var letra = palavra[i];
		var indiceNoAlfabeto = alfabeto.indexOf(letra);
		var indiceNovo = indiceNoAlfabeto + 3;
		palavra[i] = alfabeto.charAt(indiceNovo);
	}
	console.log('Palavra cifrada:', palavra.join(''));
} else {
	// descriptografa
	var palavra = rs.question('Digite uma palavra para descriptografar: ').toUpperCase().split('');
	for (var i = 0; i < palavra.length; i++) {
		var letra = palavra[i];
		var indiceNoAlfabeto = alfabeto.indexOf(letra, 3);
		var indiceNovo = indiceNoAlfabeto - 3;
		palavra[i] = alfabeto.charAt(indiceNovo);
	}
	console.log('Palavra descifrada:', palavra.join(''));
}


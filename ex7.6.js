/*
Bubble sort

Algoritmo de ordenação que olha pra dois números de cada vez, e os troca se estiverem ao contrário. Faz isso até tudo estar ordenado.

1. Percorrer o array e comparar o número atual com o próximo.
2. Caso o atual seja menor que o próximo, trocar os dois.
3. Se não houve nenhuma troca no array inteiro, ele está ordenado. Pode sair e imprimir.
4. Voltar ao passo 1.

*/

// Import do readline sync pra ler do terminal
var rs = require('readline-sync');

// Perguntar para o usuário o tamanho do array para ordenar
var quantosNumeros = rs.questionInt('Quantos numeros no seu array? ');

// Imprimir a instrução
console.log('Digite os numeros para ordenar');

// Criar um array para armazenar os números lidos
var numeros = [];
// Faz um loop com contador para ler cada número
for (var i = 0; i < quantosNumeros; i++) {
	// Lê o número
	var numero = rs.questionInt('> ');
	// Armazena o número no array
	numeros.push(numero);
}

// Faz um loop infinito.
// Isso é necessário pois não sei quando o array termina de ser ordenado
while (true) {
	// Cria uma variável que vai conferir se houve alguma troca ao percorrer o array
	var houveTroca = false;
	// Percorre o array inteiro. Como vamos olhar dois números por vez, precisamos que a condição não chegue no último índice, então subtraímos 1
	for (var pivo = 0; pivo < numeros.length - 1; pivo++)	{
		// Olha pro primeiro número
		var n1 = numeros[pivo];
		// Olha pro segundo número
		var n2 = numeros[pivo + 1];
		// Caso o primeiro seja maior que o segundo, precisamos trocá-los
		if (n1 > n2) {
			// Armazena o número 2 na casa do número 1
			numeros[pivo] = n2;
			// Armazena o número 1 na casa do número 2
			numeros[pivo + 1] = n1;
			// Marca que ocorreu uma troca durante a execução
			houveTroca = true;
		}
	}

	// Caso não tenha ocorrido nenhuma troca, quer dizer que o array está ordenado. Podemos quebrar o loop!
	if (!houveTroca) {
		break;
	}
}

// Imprime o array ordenado
console.log(numeros.join(' '));
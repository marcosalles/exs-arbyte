// Enunciado: Faça um programa que receba como entrada dois números, e faça a multiplicação dos dois sem usar o comando `*`

/*
n1	n2
2 * 3 = 3 + 3
				1		2

4 * 1 = 1 + 1 + 1 + 1
				1		2		3		4

parece que tem um loop

Passo a passo:
1. Ler dois numeros
2. Criar resultado antes do loop
3. Criar o loop com condiçao n1 > 0
4. No Fim do Loop diminuir o n1 ^^
5. Somar n2 com o resultado amuculado
6. Guardar amuculado de volta em resultado
7. Imprimir o resultado

n1 n2
Destrinchamento da logica:
1. Parece que precisa de um loop
// palavra vezes
// parece que a gente pode usar um contador
LOOP
computador, some o n2 e guarde esse resultado
1.1 Poder guardar o resultado em algum lugar -> var resultado
2. Somar o n2 no resultado e guardar ele de volta no resultado
3. Resultado tem que ser impresso -> criar resultado antes de iniciar o loop
4. Condicao de parada?
n1 = 4
4 => 3 => 2 => 1 => 0
CONDICAO = n1 > 0
*/

// 1. Ler dois numeros
// 2. Criar resultado antes do loop
// 3. Criar o loop com condiçao n1 > 0
// 4. No Fim do Loop diminuir o n1 ^^
// 5. Somar n2 com o resultado amuculado
// 6. Guardar amuculado de volta em resultado
// 7. Imprimir o resultado

var rs = require('readline-sync');


var numerosInseridos = []
var resultado = 0

for(var i = 0; i < 10; i++) {
	var numero = rs.questionInt(`Insira o numero ${i}: `);
	numerosInseridos.push(numero);
	resultado = resultado + numero;
}
console.log(resultado);
console.log(numerosInseridos);

var paraImprimir = numerosInseridos.join(' + ');
// for(var cont = 0; cont < numerosInseridos.length; cont++) {
// 	paraImprimir = paraImprimir + ' + ' + numerosInseridos[cont];
// 	// + 1
// 	// + 1 + 1
// 	// + 1 + 1 + 1
// }
paraImprimir = paraImprimir + ' = ' + resultado;
// + 1 + 1 + 1 = 3
console.log(paraImprimir);




paraImprimir = ''
numerosInseridos[3] = 15

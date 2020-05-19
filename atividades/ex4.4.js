/*
(OBRIGATÓRIO) Escreva um programa que calcule a soma de todos
os múltiplos de 3 e de 5 entre 1 e 1000.
*/

var n1 = 1;
var n2 = 1000;

var resultado = 0;
/*
res	n1	n2	n1<=n2	m3	res
0   1		4		T	 			F 	0
0 	2		4		T 			F 	0
0 	3 	4		T 			T   0 + 3
3
*/
while(n1 <= n2) {
	if (n1 % 3 == 0 || n1 % 5 == 0) {
		resultado = resultado + n1;
	}

	// funciona
	// if (n1 % 3 == 0 && n1 % 5 == 0) {
	// 	resultado = resultado + n1;
	// } else if (n1 % 3 == 0) {
	// 	resultado = resultado + n1;
	// } else if (n1 % 5 == 0) {
	// 	resultado = resultado + n1;
	// }

	n1++;
}
// 3 5 6 9 10 12 15 => 45

console.log(resultado);

var rs = require('readline-sync');



var a = [];
var b = [];
var diferent = [];

var nome1 = rs.question('Digite o nome do primeiro jogador : ')
var nome2 = rs.question(' Digite o nome do segundo jogador : ')

console.log('Digite 5 notas de 0 a 10 para o Primeiro jogador :')
for (i = 5; i > 0; i--) {
	var nota = rs.questionInt('Nota : ')
	a.push(nota);
}

console.log('Digite 5 notas de 0 a 10 para o Segundo jogador :')
for (i = 5; i > 0; i--) {
	var nota = rs.questionInt('Nota : ')
	b.push(nota);
}

for (i = 0; i < a.length; i++) {
	var nota = a[i];
	if (!b.includes(nota)) {
		diferent.push(nota);
	}
}

console.log("Items Diferentes: ", diferent.join()); 
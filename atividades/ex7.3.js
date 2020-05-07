var rs = require('readline-sync');

var a = [];
var b = [];
var diferentes = [];

console.log('Digite 5 notas de 0 a 10 para o primeiro jogador:');
for (var i = 0; i < 5; i++) {
	var nota = rs.questionInt('Nota : ');
	a.push(nota);
}

console.log('Digite 5 notas de 0 a 10 para o segundo jogador :');
for (var i = 0; i < 5; i++) {
	var nota = rs.questionInt('Nota : ');
	b.push(nota);
}

for (var i = 0; i < a.length; i++) {
	var nota = a[i];
	if (!b.includes(nota)) {
		diferentes.push(nota);
	}
}

console.log("LEFT: ", diferentes.join(' ')); 

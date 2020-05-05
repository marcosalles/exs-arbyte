
var rs = require('readline-sync');

var base = rs.questionInt('Base: ');
var expoente = rs.questionInt('Expoente: ');

var result = 1;
while(expoente >= 1) {
	result = result * base;
	expoente--;
}

console.log('Resultado:', result);

/*
base	exp		exp >= 1		result		exp--
2			4			t 					1*2=2			3
2			3			t 					2*2=4			2
2			2			t 					4*2=8			1
2			1			t 					8*2=16		0
2			0			f --- BREAK
*/

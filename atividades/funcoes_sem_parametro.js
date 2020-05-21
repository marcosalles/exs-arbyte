function daBomDia() {
	console.log('Bom dia');
}

function geraNumeroAleatorioEntre1e10() {
	var random = Math.random(10);
	random = random * 10;
	random = random + 1;
	return random.toFixed(0);
}

for (var index = 0; index < 10; index++) {
	var r = geraNumeroAleatorioEntre1e10();
	console.log(r);
}

daBomDia();

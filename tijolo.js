
var rs = require('readline-sync');

class Tijolo {
	constructor(altura, largura, profundidade) {
		this.altura = altura;
		this.largura = largura;
		this.profundidade = profundidade;
	}

	pegaAltura() {
		return this.altura;
	}

	pegaVolume() {
		var calculo = this.altura * this.largura * this.profundidade;
		return calculo;
	}
}

var tijolo = new Tijolo(10, 20, 30);
var resultado = tijolo.pegaVolume()
console.log(resultado);

// var alt = rs.question('Altura: ');
// var lrg = rs.question('Largura: ');
// var prf = rs.question('Profundidade: ');

// var tijoloDeBarro = new Tijolo(alt, lrg, prf);

// function calcularVolume(tijolo) {
// 	var volume = tijolo.altura * tijolo.largura * tijolo.profundidade;
// 	return volume;
// }

// // var calculo = calcularVolume(tijoloDeBarro);
// // console.log('Tijolo de barro:', calculo);

// var tijoloRetangular = new Tijolo(10, 15, 20);

// // calculo = calcularVolume(tijoloRetangular);
// // console.log('Tijolo retangular:', calculo);


// console.log('Volume do tijolo de barro:', tijoloDeBarro.pegaVolume());
// console.log('Volume do tijolo retangular:', tijoloRetangular.pegaVolume());


// // tijoloDeBarro.altura = 15;
// // tijoloDeBarro.largura = 10;
// // tijoloDeBarro.profundidade = 30;

// // console.log(tijoloDeBarro);


// // console.log(tijoloDeBarro.pegaAltura());
// // console.log(tijoloDeBarro.altura);

// // var obj = {};
// // obj.altura = 15;
// // obj.funcao = function() {
// // 	this.altura;
// // }

// // console.log(obj.altura);
// // obj.altura = 18;

// // var valorDeRetorno = obj.funcao();
// // console.log(valorDeRetorno);

// new Tijolo()
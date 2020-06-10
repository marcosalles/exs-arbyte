/*
Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
Para isso :
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
inicialize as propriedades com estes valores.
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
cor.
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
e cor.
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.
*/

class Carro {
	constructor(nome, modelo, cor) {
		this.nome = nome;
		this.modelo = modelo;
		this.cor = cor;
	}

	ehIgualAoOutroCarro(outroCarro) {
		var nomesSaoIguais = this.nome == outroCarro.nome;
		var modelosSaoIguais = this.modelo == outroCarro.modelo;
		if (nomesSaoIguais && modelosSaoIguais) {
			return true;
		}
		return false;
	}
}

var rs = require('readline-sync');

function criarCarro() {
	var nome = rs.question('Qual o nome do carro? ');
	var modelo = rs.question('Qual o modelo do carro? ');
	var cor = rs.question('Qual a cor do carro? ');
	return new Carro(nome, modelo, cor);
}

var carro1 = criarCarro();
// console.log(carro1);
var carro2 = criarCarro();
// console.log(carro2);

// function saoCarrosIguais(carroA, carroB) {
// 	var nomesSaoIguais = carroA.nome == carroB.nome;
// 	var modelosSaoIguais = carroA.modelo == carroB.modelo;

// 	if (nomesSaoIguais && modelosSaoIguais) {
// 		return true;
// 	}
// 	return false;
// }

// var saoIguais = saoCarrosIguais(carro1, carro2);
// console.log('são iguais: ' + saoIguais);

var saoIguais = carro2.ehIgualAoOutroCarro(carro1);
console.log('são iguais: ' + saoIguais);

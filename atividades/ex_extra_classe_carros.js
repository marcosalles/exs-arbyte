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
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.*/

class Carro {
	constructor(marca, modelo, cor) {
		this.marca = marca;
		this.modelo = modelo;
		this.cor = cor;
	}
}

var rs = require('readline-sync');

function pedeCarro(leitor) {
	var marca = leitor.question('Marca: ');
	var modelo = leitor.question('Modelo: ');
	var cor = leitor.question('Cor: ');
	var carro = new Carro(marca, modelo, cor);
	return carro;
}

function saoIguais(c1, c2) {
	var mesmoModelo = c1.modelo == c2.modelo;
	var mesmaMarca = c1.marca == c2.marca;
	return mesmaMarca && mesmoModelo;
}

function saoIguaisEmMarca(c1, c2) {
	var mesmaMarca = c1.marca == c2.marca;
	return mesmaMarca;
}

var numeroDeCarros = rs.questionInt('Quantos carros? ');
var garagem = [];
for (var i = 0; i < numeroDeCarros; i++) {
	var carro = pedeCarro(rs);
	garagem.push(carro);
}

var marcasSaoIguais = true;
for (var i = 0; i < garagem.length - 1; i++) {
	var carro1 = garagem[i];
	var carro2 = garagem[i + 1];
	if (!saoIguaisEmMarca(carro1, carro2)) {
		marcasSaoIguais = false;
		break;
	}
}

console.log('Todos os carros tem a mesma marca:', marcasSaoIguais);

var iguaisEmString;
if (marcasSaoIguais) {
	iguaisEmString = 'Sim';
} else {
	iguaisEmString = 'Não';
}
console.log('Todos os carros tem a mesma marca:', iguaisEmString);

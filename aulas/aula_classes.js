
function criarPessoa(nome, boasVindas, idade) {
	this.nome = nome;
	this.boasVindas = boasVindas;
	this.idade = idade;
	this.altura = 1.63;
	this.darBoasVindas = function() {
		console.log(`${this.boasVindas}`);
	}
}

var pessoa = new criarPessoa('Max', 'Boooooa noite', 33);
console.log(pessoa);
pessoa.darBoasVindas()
// pessoa.altura;
console.log(pessoa.altura);

class Pessoa {
	constructor(nome, boasVindas, cabelo) {
		this.abracadabra = nome;
		this.boasVindas = boasVindas;
		this.cabelo = cabelo;
	}

	darBoasVindasPara(pessoa) {
		console.log(`${this.boasVindas}, ${pessoa.nome}!`);
	}

	andar() {
		console.log(`${this.abracadabra} andou.`);
	}

	fazerCafe() {
		console.log(`${this.abracadabra} fez café.`);
		return `café sem açucar feito por ${this.abracadabra}`;
	}

	get getNome() {
		return this.abracadabra;
	}

	get getCabelo() {
		return this.cabelo;
	}

	set setNome(nome) {
		this.abracadabra = nome;
	}
}

var max = new Pessoa('Max', 'Booooooa noite', 'nenhum');
max.setNome = 'Marco';
max.nome = 'Max';
// console.log(max.getCabelo);
console.log(max.getNome);

// var objeto = {
// 	nome: 'Max',
// 	cabelo: 'nenhum'
// };

// console.log(max.nome);
// console.log(max.cabelo);
// max.andar();
// console.log(max.fazerCafe());

// var rafa = new Pessoa('Rafa', 'Coé', 'comprido');
// console.log(rafa.nome);
// console.log(rafa.cabelo);
// rafa.andar();

// max.darBoasVindasPara(rafa);
// rafa.darBoasVindasPara(max);

// console.log(max.fazerCafe());
// max.nome = 'Marco';
// console.log(max.fazerCafe());

// console.log(rafa.fazerCafe());
// rafa.fazerCafe = function() {
// 	console.log(`${this.nome} fez nescafé.`);
// 	return `nescafé aguado feito por ${this.nome}`;
// }
// console.log(rafa.fazerCafe());

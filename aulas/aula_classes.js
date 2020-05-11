
class Pessoa {
	constructor(nome, boasVindas, cabelo) {
		this.nome = nome;
		this.boasVindas = boasVindas;
		this.cabelo = cabelo;
	}

	darBoasVindasPara(pessoa) {
		console.log(`${this.boasVindas}, ${pessoa.nome}!`);
	}

	andar() {
		console.log(`${this.nome} andou.`);
	}

	fazerCafe() {
		console.log(`${this.nome} fez café.`);
		return 'café sem açucar';
	}
}

var max = new Pessoa('Max', 'Booooooa noite', 'nenhum');
console.log(max.nome);
console.log(max.cabelo);
max.andar();
console.log(max.fazerCafe());

var rafa = new Pessoa('Rafa', 'Coé', 'comprido');
console.log(rafa.nome);
console.log(rafa.cabelo);
rafa.andar();

max.darBoasVindasPara(rafa);
rafa.darBoasVindasPara(max);

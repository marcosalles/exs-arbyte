
class Pessoa {
	constructor(nome, cabelo) {
		this.nome = nome;
		this.cabelo = cabelo;
	}

	andar() {
		console.log(`${this.nome} andou.`);
	}

	fazerCafe() {
		console.log(`${this.nome} fez café.`);
		return 'café sem açucar';
	}
}

var max = new Pessoa('Max', 'nenhum');
console.log(max.nome);
console.log(max.cabelo);
max.andar();
console.log(max.fazerCafe());
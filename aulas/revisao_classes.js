var rs = require('readline-sync');

class Aluno {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}
}

function cadastraAluno() {
	var aluno = new Aluno(
		rs.question('Nome: '),
		rs.questionInt('Idade: ')
	);
	return aluno;
}

var maiorIdade = [];
for (let i = 0; i < 3; i++) {
		maiorIdade.push(cadastraAluno());
}

var alunos = [];
alunos.push({ nome: 'goku', idade: 25 });
alunos.push({ nome: 'vegeta', idade: 18 });
alunos.push({ nome: 'piccolo', idade: 14 });

var alunosMenorDeIdade = alunos.filter({FUNCAO});
alunosMenorDeIdade.forEach((a) => console.log(a.nome));
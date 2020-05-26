
// var soma = function(n1 ,n2) {
// 	return n1 + n2;
// }

// var result = soma(1, 5);
// console.log(result);

// var result2 = (function(n1 ,n2) {
// 	return n1 + n2;
// })(2, 7);
// console.log(result2);

// (3 + 4) * 5

var test = {
	nome: 'arbyte',
	createAnonFunction: function() {
		console.log('anon1: ', this.nome);
		return function() {
			console.log('anon2: ', this.nome);
		}
	},
	createArrowFunction: function() {
		console.log('arr1: ', this.nome);
		return () => {
			console.log('arr2: ', this.nome);
		}
	}
}

// var anonima = test.createAnonFunction();
// var arrow = test.createArrowFunction();
// var retornoAnon = anonima();
// var returnArrow = arrow();

// var retornaOla = () => {
// 	return 'Ola Arbyte!';
// }
// var mensagem = retornaOla();
// console.log( mensagem );

var numeros = [1,2,3,4,5,6,7,8,9,10];

// for (var i = 0; i < numeros.length; i++) {
// 	console.log(numeros[i]);
// }
var imprimeNum = function(num) { console.log(num); }
// numeros.forEach( (num) => console.log(num) );

var filtrados = numeros.filter((num) => num % 2 == 0)
// console.log(filtrados);

var filtradosA = [];
for (var i = 0; i < numeros.length; i++) {
	var num = numeros[i];
	if (num % 2 == 0) filtradosA.push(num);
}
// console.log(filtradosA);

numeros = [45, 3, 78, 345, 123, 4, 190];
var ordenado = numeros.sort( (a, b) => {
	if (a % 2 == 1) return -1;
	if (b % 2 == 1) return -1;
	return a > b;
} );
// console.log(ordenado);

var objetos = [
	{ nome: 'Hugo', idade: 28 },
	{ nome: 'Rafa', idade: 35 },
	{ nome: 'Bruno', idade: 30 },
	{ nome: 'Bruna', idade: 34 },
	{ nome: 'Maximo', idade: 35 },
];

// objetos[i]
var trintoes = objetos.filter( (obj) => {
	if (obj.idade >= 30) {
		if (obj.nome == 'Rafa') return false;
		return true;
	}
	return false;
} );
// console.log(trintoes);

var trintoesOrdenados = objetos.filter( (obj) => obj.idade >= 30 ).sort( (a,b) => a.nome > b.nome );
// console.log(trintoesOrdenados);

var maxine = { nome: 'Maxine', idade: 33 };
// console.log(objetos.includes(maxine));
objetos.push(maxine);
// console.log(objetos.includes(maxine));
// console.log(objetos.includes({ nome: 'Maxine', idade: 33 }));

var fnAnon = function(obj) {
	return obj.idade >= 30;
}
var fnArro = (obj) => {
	return obj.idade >= 30;
}

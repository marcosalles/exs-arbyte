var arbyte = require('../modulos/arbyte');

arbyte.imprimeOlaModulo();

var soma = require('../modulos/moduloDaSoma');

var resultado = soma.fazSoma(1, 2);
console.log(resultado);

var math = require('../modulos/matematica');

console.log(math.soma(5, 6));
console.log(math.fatora(5));

var calculadora = require('../modulos/calculadora');

console.log(calculadora.quadrado(5));
console.log(calculadora.pedeUmNumeroElevaAoQuadrado());
console.log(calculadora.multiplicacao(2, 3));

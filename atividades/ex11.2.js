var rs = require('readline-sync');
var Fasam = require('fasam-imc-calc');

var peso = rs.questionFloat('Peso: ');
var altura = rs.questionFloat('Altura: ');

var imcCalculator = new Fasam(peso, altura);
var imc = imcCalculator.calc();

console.log(imc);
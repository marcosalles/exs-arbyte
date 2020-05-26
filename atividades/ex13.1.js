/*
Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais
potente que o valor informado.
Para isso utiliza a propriedade “Horserpower” do cars.json
DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no
google.
*/

var fs = require('fs');
var rs = require('readline-sync');

var carrosSerializados = fs.readFileSync('./data/cars.json');
var carros = JSON.parse(carrosSerializados);

var potenciaMinima = rs.questionInt('Digita uma potencia minima: ');

var carrosComPotenciaMinima = carros.filter( (carro) => {
	return carro.Horsepower > potenciaMinima;
});

console.log(carrosComPotenciaMinima.length);

/*
Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais
potente que o valor informado.
Para isso utiliza a propriedade “Horserpower” do cars.json
DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no
google.
*/

// function numeroDeCarros(minimoHp, carros) {
// 	var carrosComHpMinimo = carros.filter(
// 		function (carro) {
// 			if (carro.Horsepower >= minimoHp) {
// 				return true;
// 			}
// 			return false;
// 		}
// 	);

// 	return carrosComHpMinimo.length;
// }

// var resultado = numeroDeCarros(hp, carros);
// console.log(resultado);


	// function (carro) {
	// 	if (carro.Horsepower >= hp) {
	// 		return true;
	// 	}
	// 	return false;
	// }


var rs = require('readline-sync');
var carros = require('../data/cars.json');

var hp = rs.questionInt('Qual o minimo HP dos carros? ');

var carrosComHpMinimo = carros.filter( (carro) => {
	var hpMinimoTaOkay = carro.Horsepower >= hp;
	var ehDasOropa = carro.Origin == 'Europe';
	return hpMinimoTaOkay || ehDasOropa;
} );

console.log(carrosComHpMinimo.length);

/*
	{
    "Car": "Ford Torino (sw)",
    "Horsepower": 153,
    "Origin": "US"
	},
	{
    "Car": "Volkswagen 1131 Deluxe Sedan",
    "Horsepower": 46,
    "Origin": "Europe"
	},
	{
    "Car": "Toyota Corolla 1200",
    "Horsepower": 65,
    "Origin": "Japan"
  },
*/
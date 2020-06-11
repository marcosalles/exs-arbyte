/*
Criar um módulo que calcule a média de uma coleção de números.
Para isso crie um arquivo chamado calcula-media.js.
No módulo exporte uma função media(arr) que recebe como argumento um array de
números.
A função deve iterar por esses números e retornar sua média.
Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3
números, utilize o módulo criado para calcular a média e no final imprima o resultado
para o usuário.
*/

// var rs = require('readline-sync');

var calculaMedia = require('./calcula-media');
var media = calculaMedia([10,0]);
console.log(media);

/*
{
	calculaMedia: function
}
*/

// console.log(abobrinha.calculaMedia([10,4]));

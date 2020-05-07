
function converteIdadeParaDias(idade){
	totalDias = idade.anos*365 + idade.meses*30 + idade.dias
	return totalDias
}

var rs = require('readline-sync')

var velhice = {}
velhice.anos = rs.questionInt('Quantos anos?')
velhice.meses = rs.questionInt('Quantos meses?')
velhice.dias = rs.questionInt('Quantos dias?')

console.log(converteIdadeParaDias(velhice))

function nomeDaFunction(parametros) {
	// corpo
	return;
}

var funcaoAnonima = function (parametros) {
	// corpo
	console.log(parametros);
	return;
}
funcaoAnonima('parametro em string');

(function (parametros) {
	// corpo
	console.log(parametros);
	return;
})('parametro da funcao auto-executavel')

// var funcaoDoForEach = function (elementoDoArray, indiceDoElemento, array) {
// function funcaoDoForEach(elementoDoArray) {
// 	// corpo
// 	console.log(elementoDoArray);
// 	return;
// }

var numeros = [1, 2, 3, 4, 5, 6];
numeros.forEach(function (elemento) { console.log(elemento) })

// var anoniFunc = function () { console.log('Anon function') }
// var arrowFunc = () => { console.log('Arrow function') }

numeros.forEach((elemento) => { console.log(elemento) })

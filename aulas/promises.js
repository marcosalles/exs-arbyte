var willResolve = true;

new Promise((resolve, reject) => {
	setTimeout(() => {
		if (willResolve) {
			var resposta = {};
			resposta.data = {
				name: 'bulbasaur',
				id: 1,
			}
			resolve(resposta);
		} else {
			reject('Fracasso');
		}
	}, 500);
})
	.then(resposta => console.log('SUCESSO:', resposta))
	.catch(erro => console.log('Fracasso:', erro));

console.log('terminou');

setTimeout(() => willResolve = false, 600);
console.log('terminou mesmo');
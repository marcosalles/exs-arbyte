
const apiDoCovid = 'https://covid19-brazil-api.now.sh/api/report/v1';

const axios = require('axios');
const rs = require('readline-sync');

const nomeDoEstado = rs.question('De que estado quer informações? ');

axios.get(apiDoCovid)
	.then( function(resposta) {
		const dadosPorEstado = resposta.data.data;
		for (var i = 0; i < dadosPorEstado.length; i++) {
			const uf = dadosPorEstado[i];
			if (uf.state == nomeDoEstado){
				console.log('FOR:', uf);
			}
		}

		dadosPorEstado.forEach( (uf) => {
			if (uf.state == nomeDoEstado) {
				console.log('FOREACH:', uf);
			}
		} );

		var dadosFiltrados = dadosPorEstado.filter((uf) => {
			return uf.state == nomeDoEstado;
		})
		console.log('FILTER:', dadosFiltrados);

		var uf = dadosPorEstado.find((uf) => {
			return uf.state == nomeDoEstado;
		})
		console.log('FIND:', uf);
	} )
	
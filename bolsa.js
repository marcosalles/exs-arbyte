
var rs = require('readline-sync');
var axios = require('axios');

var nomeDoMunicipio = rs.question('Digite o nome de um municipio: ').toLowerCase();
var ano = rs.question('Digite o ano de referencia (YYYY): ');
var mes = rs.question('Digite o mes de referencia (MM): ');

var apiDeMunicipios = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios';
var apiDaBolsaFamilia = 'http://www.transparencia.gov.br/api-de-dados/bolsa-familia-por-municipio';
// ?mesAno=201906&codigoIbge=3550308&pagina=1
function pegaDadosDoBolsaFamiliaParaOMunicipio(codigoDeMunicipio) {
	// console.log(codigoDeMunicipio);
	var urlDoBolsaFamilia = `${apiDaBolsaFamilia}?mesAno=${ano}${mes}&codigoIbge=${codigoDeMunicipio}&pagina=1`;
	axios.get(urlDoBolsaFamilia)
		.then( (resposta) => {
			var listaDeBeneficios = resposta.data;
			// console.log(listaDeBeneficios);
			if (listaDeBeneficios.length == 0) {
				console.log('Não há benefícios para a data e municipio selecionado');
			}
			listaDeBeneficios.forEach( (beneficio) => {
				console.log('Quantidade de beneficiados: ' + beneficio.quantidadeBeneficiados);
				console.log('Valor total: ' + beneficio.valor);
				console.log('Municipio: ' + beneficio.municipio.nomeIBGE);
				var nomeDoMunicipioNoIbge = beneficio.municipio.nomeIBGE;
				var quantidade = beneficio.quantidadeBeneficiados;
				var valor = beneficio.valor;
				var valorPorBeneficiado = valor / quantidade;
				console.log(`No município de ${nomeDoMunicipioNoIbge}, no mes ${mes} do ano ${ano}, tivemos um beneficio médio de R$ ${valorPorBeneficiado.toFixed(2)}`);
			} );
		} );
}

axios.get(apiDeMunicipios)
	.then( (resposta) => {
		var municipios = resposta.data;
		var municipioEncontrado = municipios.find( (identificador) => {
			if (nomeDoMunicipio == identificador.nome.toLowerCase()) {
				return true;
			}
			return false;
		} );
		pegaDadosDoBolsaFamiliaParaOMunicipio(municipioEncontrado.id);
	} );

/*
[
  {
    "municipio": {
      "nomeIBGE": "SÃO PAULO",
    },
    "valor": 73578717,
    "quantidadeBeneficiados": 434385
  }
]
*/
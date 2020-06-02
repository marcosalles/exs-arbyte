

var url = 'https://pokeapi.co/api/v2/';

const axios = require('axios') ;
const rs = require('readline-sync');

var pesquisa = rs.question('Digite o nome ou numero de um pokemon: ').toLowerCase();

// console.log(pesquisa);

axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`)
	.then( (resposta) => {
		const pokemon = resposta.data;
		console.log(pokemon.name);

		var nomesDasHabilidades = [];
		pokemon.abilities.forEach( (habilidade) => {
			nomesDasHabilidades.push(habilidade.ability.name);
		} );
		// é igual ao de cima
		// for (var i = 0; i < pokemon.abilities.length; i++) {
		// 	var habilidade = pokemon.abilities[i];

		// 	nomesDasHabilidades.push(habilidade.ability.name);
		// }
		console.log(nomesDasHabilidades);

		var nomesDosTipos = [];
		pokemon.types.forEach( (tipo) => {
			nomesDosTipos.push(tipo.type.name)
		} );
		console.log(nomesDosTipos);
	} )

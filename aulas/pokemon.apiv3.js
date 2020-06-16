

var api = 'https://pokeapi.co/api/v2';

var axios = require('axios');

// cria pokemon pra salvar
var pokemon = {};
axios.get(api + '/pokemon/1')
	.then((respostaPokemon) => {
		// console.log('Resposta pokemon');
		var pokemonData = respostaPokemon.data;

		// preenche nome
		pokemon.name = pokemonData.name;

		var primeiraHabilidade = pokemonData.abilities[0].ability;
		// preenche habilidade
		pokemon.ability = primeiraHabilidade.name;

		var primeiroTipo = pokemonData.types[0].type;
		// preenche tipo
		pokemon.type = primeiroTipo.name;

		// faz requisicao da habilidade
		// return faz uma nova promise cair em um novo then (Linha 29)
		return axios.get(`${api}/ability/${pokemon.ability}`);
	})
	.then((respostaHabilidade) => {
		// console.log('Resposta habilidade 1');
		var abilityData = respostaHabilidade.data;

		var primeiroEfeito = abilityData.effect_entries[0];
		// preenche efeito da habilidade
		pokemon.abilityEffect = primeiroEfeito.effect;
		
		// faz requisicao do tipo
		// return faz uma nova promise cair em um novo then (Linha 41)
		return axios.get(`${api}/type/${pokemon.type}`);
	})
	.then((respostaTipo) => {
		// console.log('Resposta tipo 1');
		var typeData = respostaTipo.data;

		var tresPrimeirosPokemonsComOMesmoTipo = typeData.pokemon.slice(0, 2);
		// preenche pokemons com mesmo tipo
		pokemon.otherPokemonWithSameType = tresPrimeirosPokemonsComOMesmoTipo;
	
		console.log(pokemon);
		// salva em JSON
		// salva em um banco de dados
	});

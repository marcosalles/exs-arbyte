
// JEITO MAIS FACIL/CLÁSSICO

var api = 'https://pokeapi.co/api/v2';

var axios = require('axios');

axios.get(api + '/pokemon/1').then((respostaPokemon) => {
	// console.log('Resposta pokemon');
	var pokemonData = respostaPokemon.data;

	// cria pokemon pra salvar
	var pokemon = {};
	// preenche nome
	pokemon.name = pokemonData.name;

	var primeiraHabilidade = pokemonData.abilities[0].ability;
	// preenche habilidade
	pokemon.ability = primeiraHabilidade.name;

	var primeiroTipo = pokemonData.types[0].type;
	// preenche tipo
	pokemon.type = primeiroTipo.name;

	// faz requisicao da habilidade
	axios.get(primeiraHabilidade.url)
		.then((respostaHabilidade) => {
			// console.log('Resposta habilidade 1');
			var abilityData = respostaHabilidade.data;

			var primeiroEfeito = abilityData.effect_entries[0];
			// preenche efeito da habilidade
			pokemon.abilityEffect = primeiroEfeito.effect;
			
			axios.get(primeiroTipo.url)
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
		});
});

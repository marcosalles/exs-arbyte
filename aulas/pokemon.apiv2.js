
// JEITO MAIS ORGANIZADO/NÃO INTUITIVO, MAS LINEAR

var api = 'https://pokeapi.co/api/v2';

var axios = require('axios');

var pkmn = 1;

axios.get(`${api}/pokemon/${pkmn}`).then(respostaPokemon);

// funcao pra resolver a resposta da api de pokemon
var respostaPokemon = (resposta) => {
	// console.log('Resposta pokemon');
	var pokemonData = resposta.data;

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
	axios.get(`${api}/ability/${pokemon.ability}`)
		.then(r => respostaHabilidade(r, pokemon));
};

// funcao pra resolver a resposta da api de habilidades
var respostaHabilidade = (resposta, pokemon) => {
	// console.log('Resposta habilidade 1');
	var abilityData = resposta.data;

	var primeiroEfeito = abilityData.effect_entries[0];
	// preenche efeito da habilidade
	pokemon.abilityEffect = primeiroEfeito.effect;
	
	axios.get(`${api}/type/${pokemon.type}`)
		.then(r => respostaTipo(r, pokemon));
};

// funcao pra resolver a resposta da api de tipos
var respostaTipo = (resposta, pokemon) => {
	// console.log('Resposta tipo 1');
	var typeData = resposta.data;

	var tresPrimeirosPokemonsComOMesmoTipo = typeData.pokemon.slice(0, 2);
	// preenche pokemons com mesmo tipo
	pokemon.otherPokemonWithSameType = tresPrimeirosPokemonsComOMesmoTipo;

	console.log(pokemon);
	// salva em JSON
	// salva em um banco de dados
};
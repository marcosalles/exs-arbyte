
const axios = require('axios');

var rs = require('readline-sync');


var nomeDoPkmn = rs.question('Manda um PKMN: ');
axios.get(`https://pokeapi.co/api/v2/pokemon/${nomeDoPkmn}`)
	.then((resposta) => {
		var pokemon = resposta.data;
		// processa(pokemon);
		var numeroDoPokemon = pokemon.id;
		var nomeDoPokemon = pokemon.name;
		console.log(`${numeroDoPokemon} - ${nomeDoPokemon}`);
	})
	.catch((abobrinha) => {
		console.log(abobrinha);
	});


var equacao = rs.question('Digite uma equacao: ');
axios.get(`https://newton.now.sh/simplify/${equacao}`)
    .then((resposta) => {
        var resultado = resposta.data.result;
        console.log(resultado)
    })
    .catch((erro) => {
        console.log(erro)
    }) 
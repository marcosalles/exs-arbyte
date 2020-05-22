/*
1. Criar um objeto que tenha duas propriedades:
nome de usuario
mensagem
criar uma função que receba o nome do usuario, peça uma pensagem e retorne um objeto como
dito acima

2. serializar uma mensagem em um arquivo json

3. desserializar o arquivo de mensagem e mostrar na tela

4. criar uma lista de mensagens e serializar em um arquivo

5. trocar o objeto por uma classe Mensagem

6. incrementar e fazer um chat
*/

var rs = require('readline-sync');
var fs = require('fs');

function escreveMensagem(rs, nomeDeUsuario) {
	var mensagem = rs.question('Escreva sua mensagem: ');
	var objetoDaMensagem = {};
	objetoDaMensagem.nome = nomeDeUsuario;
	objetoDaMensagem.mensagem = mensagem;
	return objetoDaMensagem;
}

function salvaChat(fs, caminhoDoArquivo, chat) {
	var chatSerializado = JSON.stringify(chat);
	fs.writeFileSync(caminhoDoArquivo, chatSerializado);
}

function carregaChat(fs, caminhoDoArquivo) {
	var chatSerializado = fs.readFileSync(caminhoDoArquivo);
	var chatDesserializado = JSON.parse(chatSerializado);
	return chatDesserializado;
}

var caminho = 'data/chat.json';
var chat = carregaChat(fs, caminho);

var nome = rs.question('Diga o nome de quem quer ver as mensagens: ');

console.log('*** Mostrando mensagens de ' + nome);

for (var i = 0; i < chat.length; i++) {
	var usuario = chat[i];
	if (usuario.nome == nome) {
		console.log(usuario.mensagem);
	}
}

console.log('*** Fim das mensagens');


// while (true) {
// 	var querNovaMensagem = rs.keyInYN('Quer digitar uma mensagem? ');
// 	if (querNovaMensagem == true) {
// 		var nome = rs.question('Diga seu nome: ');
// 		var mensagem = escreveMensagem(rs, nome);
// 		chat.push(mensagem);
// 	} else {
// 		break;
// 	}
// }
// salvaChat(fs, caminho, chat);

// var chatCarregado = carregaChat(fs, caminho);
// console.log(chatCarregado);

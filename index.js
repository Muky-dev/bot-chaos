const fs = require('fs');
const Discord = require('discord.js');
const {
	token,
	prefix
} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

console.log(commandFiles);

// O fs.readdirSync()método retornará um array de todos os nomes de arquivo naquele diretório
// O filtro existe para garantir que quaisquer arquivos não JS sejam deixados de fora do array. 
// Com esse array, você pode fazer um loop sobre ele e definir dinamicamente seus comandos para a coleção que você fez acima.

client.once('ready', () => {
	console.log('READY!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLocaleLowerCase();
});

client.login(token);
const Discord = require('discord.js');
const chaos = new Discord.Client();
const { token, prefix } = require('./config.json');

chaos.on('ready', () => {
	console.log('Ready!');
});

chaos.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

});

chaos.login(token);
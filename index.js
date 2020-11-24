const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
	.readdirSync('./commands')
	.filter(file => file.endsWith('.js'));

commandFiles.forEach((file) => {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
});

client.on('ready', () => {
	console.log(`${client.user.username} connected!`);
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) ||
		(message.author.bot)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName))
		return message.reply('unknown command');

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	} catch (error) {
		console.log(error);
		message.reply('command error');
	}

});

client.login(token);
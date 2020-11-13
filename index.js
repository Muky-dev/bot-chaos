const fs = require('fs');
const Discord = require('discord.js');
const {
	prefix,
	token
} = require('./config.json');
const ytdl = require('ytdl-core');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};

client.once('ready', () => {
	console.log('READY!');
});
client.once('reconnecting', () => {
	console.log('RECONNECTING!');
});
client.once('disconnect', () => {
	console.log('DISCONNECT!');
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	} catch (error) {
		console.log(error);
		message.reply('deu pau no comando que tu digitou, sinto muito...');
	}

});

client.login(token);

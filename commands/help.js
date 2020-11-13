module.exports = {
	name: 'help',
	description: 'display help',
	execute(message, args) {
		const Discord = require('discord.js');
		const embed = new Discord.MessageEmbed()
			.setColor('#F00')
			.setTitle('bot chaos command help')
		

		message.channel.send(exampleEmbed);
	}
}
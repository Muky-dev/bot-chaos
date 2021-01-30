module.exports = {
	name: 'help',
	description: 'display help',
	execute(message, args) {
		const Discord = require('discord.js');
		const embed = new Discord.MessageEmbed()
			.setTitle('bot chaos command help')
			.setAuthor('slowed')
			.setColor('#F00')
			.setURL('https://github.com/root-marco/chaos')
			.setDescription('command list to help you')
			.addField('ping', 'show ping', 'https://img.ibxk.com.br/2020/01/30/30021141299110.jpg?w=1120&h=420&mode=crop&scale=both')
			.addField('clear', 'clear chat')
			.setImage("https://img.ibxk.com.br/2020/01/30/30021141299110.jpg?w=1120&h=420&mode=crop&scale=both")
			
		message.channel.send(embed);
	}
}
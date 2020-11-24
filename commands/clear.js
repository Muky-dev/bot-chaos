module.exports = {
	name: 'clear',
	description: 'clear chat messages',
	execute(message, args) {
		if(!args[0]) 
			return message.reply('Error, please define second argument');
		message.channel.bulkDelete(args[0]);
	}
}
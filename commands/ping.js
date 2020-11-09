const ping = {
	name: 'ping',
	description: 'ping command',
	execute(message, args) {
		message.channel.send('pong');
	}
};

export default ping; 
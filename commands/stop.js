module.exports = {
	name: 'stop',
	description: 'stop music',
	execute(message, agrs) {
		const ytdl = require('ytdl-core');
		if (!message.member.voice.channel) return message.channel.send('entra na porra do canal de voz');
		message.member.voice.channel.leave();
		return undefined;
	}
}
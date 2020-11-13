module.exports = {
	name: 'play',
	description: 'play music',
	execute(message, agrs) {
		const ytdl = require('ytdl-core');
		const { args } = require('../index')
		const voiceChannel = message.member.voice.channel;
		if (!voiceChannel) return message.channel.send('entra na porra do canal de voz');

		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) return message.channel.send('nao tenho permissao pra fazer isso nao cara');
		if (!permissions.has('SPEAK')) return message.channel.send('nao tenho permissao pra fazer isso nao cara');

		try {
			var connection = voiceChannel.join();
		} catch (error) {
			console.log('deu pau no bot');
			return message.channel.send('deu pau no bot');
		}

		const dispatcher = connection.play(ytdl(args[1]))
		.on('finish', () => {
			voiceChannel.leave();
		})
		.on('error', error => {
			console.log(error);
		})
		dispatcher.setVolumelogarithmic(5 / 5)
	}
}
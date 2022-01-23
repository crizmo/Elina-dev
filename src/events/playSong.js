const music = require('@koenie06/discord.js-music');
const { MessageEmbed , MessageAttachment } = require('discord.js');

music.event.on('playSong', (channel, songInfo, requester) => {

	const song = new MessageEmbed()
	.setTitle(` Playing ${songInfo.title} !`)
	.setDescription("Song Details")
	.addFields(
		{name: `Song`, value: `${songInfo.url}`, inline: true},
		{name: `Duration`, value: `${songInfo.duration}`, inline: true},
	)
	.setTimestamp()
	.setColor("RANDOM")
	.setFooter(`Requested by ${requester.tag}`);
	channel.send({embeds: [song]});
});
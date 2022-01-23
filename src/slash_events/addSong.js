const music = require('@koenie06/discord.js-music');

music.event.on('addSong', (channel, songInfo, requester) => {
	channel.send({ content: `Added the song [${songInfo.title}](${songInfo.url}) - ${songInfo.duration} to the queue | Added by \`${requester.tag}\`` });
});
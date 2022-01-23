const music = require('@koenie06/discord.js-music');

music.event.on('finish', (channel) => {
	channel.send({ content: `All music has been played, disconnecting..` });
});
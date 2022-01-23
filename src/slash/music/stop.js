const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('Stops the music of the bot and disconnects'),
	async execute(interaction) {

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

		const queue = music.getQueue({
			interaction: interaction
		});
		if(queue.length === 0) return interaction.reply({ content: 'No music is playing', ephemeral: true });

        music.stop({
            interaction: interaction
        });
	},
};
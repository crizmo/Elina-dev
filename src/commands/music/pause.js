const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pause')
		.setDescription('Pauses the current playing song'),
	async execute(interaction) {

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        const isPaused = music.isPaused({
            interaction: interaction
        });
        // if(isPaused) return interaction.reply({ content: 'The song is already paused', ephemeral: true });

        music.pause({
            interaction: interaction
        });

        interaction.reply({ content: `Paused the music` });

	},
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('skip')
		.setDescription('Skips the current playing song'),
	async execute(interaction) {

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        music.skip({
            interaction: interaction
        });

        interaction.reply({ content: `Skipped the song` });

	},
};
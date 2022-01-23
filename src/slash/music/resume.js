const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('resume')
		.setDescription('Resumes the current playing song'),
	async execute(interaction) {

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        const isResumed = music.isResumed({
            interaction: interaction
        });
        // if(isResumed) return interaction.reply({ content: 'The song is already resumed', ephemeral: true });

        music.resume({
            interaction: interaction
        });

        interaction.reply({ content: `Resumed the music` });

	},
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('volume')
		.setDescription('Changes the volume of the music')
        .addIntegerOption(integer => 
            integer
                .setName('volume')
                .setDescription('The new volume of the music')
                .setRequired(true)),
	async execute(interaction) {

        const volume = interaction.options.getInteger('volume');

        if(volume > 100) return interaction.reply({ content: 'Can\'t go higher than 100%', ephemeral: true });

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        music.volume({
            interaction: interaction,
            volume: volume
        });

        interaction.reply({ content: `Set the volume to ${volume}` });

	},
};
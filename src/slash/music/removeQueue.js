const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('removequeue')
		.setDescription('Removes a song from the queue')
        .addIntegerOption(integer => 
            integer
                .setName('number')
                .setDescription('The number of the queue song to remove')
                .setRequired(true)),
	async execute(interaction) {

        const number = interaction.options.getInteger('number');

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        const queue = await music.getQueue({
            interaction: interaction
        });
        if(!queue[number - 1]) return interaction.reply({ content: 'That number of the queue doesn\'t exist', ephemeral: true });

        music.removeQueue({
            interaction: interaction,
            number: number
        });
        interaction.reply({ content: `Removed the ${number}th song of the queue.` });

	},
};
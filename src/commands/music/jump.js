const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jump')
		.setDescription('Jumps to a selected song of the queue')
        .addIntegerOption(integer => 
            integer
                .setName('number')
                .setDescription('The number of the queue to jump to')
                .setRequired(true)),
	async execute(interaction) {

        const number = interaction.options.getInteger('number');

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        const queue = music.queue({
            interaction: interaction
        });
        if(number > queue.length) return interaction.reply({ content: 'Can\'t jump that far!', ephemeral: true });

        music.jump({
            interaction: interaction,
            number: number
        });
        
        interaction.reply({ content: `Jump the song to the given queue number.` });

	},
};
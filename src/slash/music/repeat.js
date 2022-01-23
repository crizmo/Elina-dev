const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('repeat')
		.setDescription('Repeats the playing song forever')
        .addBooleanOption(boolean => 
            boolean
                .setName('onoroff')
                .setDescription('Sets the repeat to on or off')
                .setRequired(true)),
	async execute(interaction) {

        const boolean = interaction.options.getBoolean('onoroff');

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        const isRepeated = music.isRepeated({
            interaction: interaction
        });
        if(isRepeated === boolean) return interaction.reply({ content: `Repeat mode is already on ${boolean}`, ephemeral: true });

        music.repeat({
            interaction: interaction,
            value: boolean
        });

        interaction.reply({ content: `Turned repeat mode to ${boolean}` });

	},
};
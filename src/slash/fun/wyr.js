const { SlashCommandBuilder } = require('@discordjs/builders');
const { WouldYouRather } = require('discord-gamecord');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wyr')
		.setDescription('Would you rather!'),
	async execute(interaction, client) {
        new WouldYouRather({
            message: interaction,
            slash_command: true,
            embed: {
              title: 'Would You Rather',
              color: '#5865F2',
            },
            thinkMessage: '**Thinking...**',
            buttons: { option1: 'Option 1', option2: 'Option 2' },
            othersMessage: 'You are not allowed to use buttons for this message!',
          }).startGame();
	},
};
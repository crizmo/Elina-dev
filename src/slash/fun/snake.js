const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
const { Snake } = require('discord-gamecord')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('snake')
		.setDescription('Snake command usage and information!'),
        
	async execute(interaction, client) {
        new Snake({
            message: interaction,
            slash_command: true,
            embed: {
              title: 'Snake Game',
              color: '#5865F2',
              overTitle: 'Game Over',
            },
            snake: { head: '🟢', body: '🟩', tail: '🟢' },
            emojis: {
              board: '⬛',
              food: '🍎',
              up: '⬆️', 
              down: '⬇️',
              right: '➡️',
              left: '⬅️',
            }
          }).startGame();
	},  
};
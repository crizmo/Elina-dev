const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
const { Slots } = require('discord-gamecord');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('slots')
		.setDescription('Slots (non economy) command usage and information!'),
        
	async execute(interaction, client) {
        new Slots({
            message: interaction,
            slash_command: true,
            embed: {
                title: '🎰 Slot Machine',
                color: '#5865F2'
            }
        }).startGame();
	},  
};
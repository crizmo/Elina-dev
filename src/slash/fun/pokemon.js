const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
const { GuessThePokemon } = require('discord-gamecord')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pokemon')
		.setDescription('Guess the pokemon command usage and information!'),
        
	async execute(interaction, client) {

		new GuessThePokemon({
            message: interaction,
            slash_command: true,
            embed: {
              title: 'Who\'s This Pokemon?',
              footer: 'You have only 1 chance',
              color: '#5865F2',
            },
            time: 60000,
            thinkMessage: '**Thinking...**',
            winMessage: 'Nice! The pokemon was **{pokemon}**',
            stopMessage: 'Better luck next time! It was a **{pokemon}**',
            incorrectMessage: 'Nope! The pokemon was **{pokemon}**',
          }).startGame();
	},  
};
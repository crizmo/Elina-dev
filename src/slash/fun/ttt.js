const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
const { TicTacToe } = require('discord-gamecord')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ttt')
		.setDescription('Tic Tac Toe command usage and information!')
		.addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),
        
	async execute(interaction, client) {
        new TicTacToe({
            message: interaction,
            slash_command: true,
            opponent: interaction.options.getUser('user'),
            embed: {
              title: 'Tic Tac Toe',
              overTitle: 'Game Over',
              color: '#5865F2',
            },
            oEmoji: '🔵',
            xEmoji: '❌',
            blankEmoji: '➖',
            oColor: 'PRIMARY',
            xColor: 'DANGER',
            waitMessage: 'Waiting for the opponent...',
            turnMessage: '{emoji} | Its now **{player}** turn!',
            askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
            cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. \:(',
            timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
            drawMessage: 'It was a draw!',
            winMessage: '{emoji} | **{winner}** won the game!',
            gameEndMessage: 'The game went unfinished :(',
          }).startGame();
	},  
};
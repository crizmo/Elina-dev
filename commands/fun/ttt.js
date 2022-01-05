const { Discord } = require('discord.js');
const { version } = require('discord.js');
const { TicTacToe } = require('discord-gamecord')

module.exports = {
    name: "ttt",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "e", 
    async execute(client, message, args, Discord) {

     if(!message.mentions.users.first()) return message.reply('Mention who you want to play with')
     new TicTacToe({
        message: message,
        slash_command: false,
        opponent: message.mentions.users.first(),
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
        othersMessage: 'You are not allowed to use buttons for this message!',
        gameEndMessage: 'The game went unfinished :(',
      }).startGame();
}
}
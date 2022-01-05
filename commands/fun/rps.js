const { Discord } = require('discord.js');
const { version } = require('discord.js');
const { RockPaperScissors } = require('discord-gamecord')

module.exports = {
    name: "rps",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "e", 
    async execute(client, message, args, Discord) {

     if(!message.mentions.users.first()) return message.reply('Mention who you want to play with')  
      new RockPaperScissors({
        message: message,
        slash_command: false,
        opponent: message.mentions.users.first(),
        embed: {
          title: 'Rock Paper Scissors',
          description: 'Press a button below to make a choice!',
          color: '#5865F2',
        },
        buttons: {
          rock: 'Rock',
          paper: 'Paper',
          scissors: 'Scissors',
        },
        emojis: {
          rock: '🌑',
          paper: '📃',
          scissors: '✂️',
        },
        othersMessage: 'You are not allowed to use buttons for this message!',
        chooseMessage: 'You choose {emoji}!',
        noChangeMessage: 'You cannot change your selection!',
        askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Rock Paper Scissors!',
        cancelMessage: 'Looks like they refused to have a game of Rock Paper Scissors. \:(',
        timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
        drawMessage: 'It was a draw!',
        winMessage: '{winner} won the game!',
        gameEndMessage: 'The game went unfinished :(',
        
      }).startGame();
}
}
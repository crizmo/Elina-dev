const { Trivia } = require('discord-gamecord');
const { Discord } = require('discord.js');
const { version } = require('discord.js');

module.exports = {
    name: "trivia",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "e", 
    async execute(client, message, args, Discord) {
        new Trivia({
        message: message,
        slash_command: false,
        embed: {
            title: 'Trivia',
            description: 'You have {time} seconds to respond!',
            color: '#5865F2',
        },
        difficulty: 'medium',
        winMessage: 'GG, Your answer was correct! It was **{answer}**',
        loseMessage: 'Your answer was Incorrect! The correct answer was **{answer}**',
        othersMessage: 'You are not allowed to use buttons for this message!',
        }).startGame();
    }
}
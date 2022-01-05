const { Discord } = require('discord.js');
const { version } = require('discord.js');
const { Snake } = require('discord-gamecord')

module.exports = {
    name: "snake",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "e", 
    async execute(client, message, args, Discord) {
        
        if(message.content === '=snake') {
            new Snake({
              message: message,
              slash_command: false,
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
          }
}
}
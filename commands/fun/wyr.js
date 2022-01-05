const { Discord } = require('discord.js');
const { version } = require('discord.js');
const { WouldYouRather } = require('discord-gamecord');

module.exports = {
    name: "wyr",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "would you rather",
    async execute(client, message, args, Discord, cmd){

      new WouldYouRather({
        message: message,
        slash_command: false,
        embed: {
          title: 'Would You Rather',
          color: '#5865F2',
        },
        thinkMessage: '**Thinking...**',
        buttons: { option1: 'Option 1', option2: 'Option 2' },
        othersMessage: 'You are not allowed to use buttons for this message!',
      }).startGame();
  }
}
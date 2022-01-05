const { Slots } = require('discord-gamecord');
const { Discord } = require('discord.js');
const { version } = require('discord.js');


module.exports = {
    name: "slt",
    aliases: ["nor-slots", "slt"],
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "would you rather",
    async execute(client, message, args, Discord, cmd){

        new Slots({
            message: message,
            slash_command: false,
            embed: {
                title: '🎰 Slot Machine',
                color: '#5865F2'
            }
        }).startGame();
}
}
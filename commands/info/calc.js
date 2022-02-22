const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const { Calculator } = require("weky");

module.exports = {
    name: "calculator",
    aliases: ["cal"],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "cal command",

    async execute(client, message, args, Discord) {

        await Calculator({
            message: message,
            embed: {
                title: 'Elina Calculator',
                color: '#5865F2',
                footer: '© Elina',
                timestamp: true
            },
            disabledQuery: 'Calculator is disabled!',
            invalidQuery: 'The provided equation is invalid!',
            othersMessage: 'Only <@{{author}}> can use the buttons!'
        });

    }
}
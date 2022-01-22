const fetch = require('node-fetch');
const Tey = require("@teyvatdev/node-sdk");
const tey = new Tey.default(process.env.TEYTOKEN);
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: "ambertest",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "Genshin info & stats command",
    async execute(client, message, args, Discord) {
        tey.getCharacter('Amber').then((data) => {
            console.log(data);
            //Expected, Amber stats
          });
    }
}
const fetch = require('node-fetch');
const Tey = require("@teyvatdev/node-sdk");
const tey = new Tey.default(process.env.TEYTOKEN);
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: "tc",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "Genshin info & stats command",
    async execute(client, message, args, Discord) {

        let name = args[0]

        let data = await tey.getCharacter(`${name}`);

        // tey.getCharacter(`${name}`)
            // console.log(data);

            const embed = new MessageEmbed()
            .setTitle(data.name)

            message.channel.send({embeds: [embed]})
            //Expected, Amber stats

    }
}
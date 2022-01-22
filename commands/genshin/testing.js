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

        const rlname = name.charAt(0).toUpperCase() + name.slice(1);
        
        let Char_Data = []
        let data = await tey.getCharacter(`${rlname}`);

            Char_Data.push({
                charname : data.name.toLocaleString(),
                description : data.id.toLocaleString(),
            })

        const charEmbed = new MessageEmbed()
        .setTitle(`${Char_Data[0].charname}`)
        .setDescription(`${Char_Data[0].description}`)

        message.channel.send({ embeds: [charEmbed] })

        }    
}
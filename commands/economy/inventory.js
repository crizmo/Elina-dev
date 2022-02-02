const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "inventory",
    aliases: ["inv"],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "inventoy command",

    async execute(client, message, args, Discord) {
        const user = message.author;
        let result = await cs.getUserItems({
            user: user,
            guild: message.guild,
        });
        let inv = result.inventory.slice(0, 10)
        const embed = new Discord.MessageEmbed()
            .setTitle('Your Inventory is Empty!')
        for (key of inv) {
            embed.addField(`**${key.name}:**`, `Amount: ${key.amount}`);
            embed.setTitle('Your Inventory!')

        }
        return message.reply({
            embeds: [embed]
        })
    }
}
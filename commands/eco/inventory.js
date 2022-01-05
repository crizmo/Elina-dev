const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "inventory",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "inventoy command",

    async execute(client, message, args, Discord) {
        const user = message.author;
        let result = await cs.getUserItems({
            user: user,
            guild: { id : null },
        });
        let inv = result.inventory.slice(0, 10)
        const embed = new Discord.MessageEmbed()
            .setDescription('Your Inventory in Empty!')
        for (key of inv) {
            embed.addField(`**${key.name}:**`, `Amount: ${key.amount}`);
            embed.setDescription('Your Inventory!')

        }
        return message.reply({
            embeds: [embed]
        })
    }
}
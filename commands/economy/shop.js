const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "shop",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Shop command",

    async execute(client, message, args, Discord) {

        try{
            let result = await cs.getShopItems({
                guild: message.guild
            });
            
                let inv = result.inventory;
            
                const embed = new MessageEmbed()
                    .setTitle('Item Shop')
                    .setDescription('Here are the following items you can buy, to buy an item do \`=buy <item_number>\`')
                    .setColor('RED')
                for (let key in inv) {
                    embed.addField(`${parseInt(key) + 1} ・ **${inv[key].name}:**  \` ¥ ${inv[key].price} \` `,`> ${inv[key].description}`)
                }
                message.reply({
                    embeds: [embed],
    
                })
            } catch (err) {
                message.reply('Nothing is there in the shop')
            }
    }
}
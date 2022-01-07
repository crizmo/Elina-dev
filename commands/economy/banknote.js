const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "banknote",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Banknote command",

    async execute(client, message, args, Discord) {

        const arr = await cs.getUserItems({
            user: message.author,
            guild: message.guild
        });
        if (!arr.inventory.length) return message.reply("You don't have any banknotes!");
        for (i in arr.inventory) {
            if (arr.inventory[i].name.toLowerCase().includes('banknote')) {
                i++
                const removeItem = await cs.removeUserItem({
                    user: message.author,
                    item: i,
                    guild: message.guild
                });
                if (removeItem.error) {
                    console.log('Bot tried to remove item number ' + i)
                    return message.reply("Unknown error occured see console.")
                };
                const ToincreasedAmount = 5000 + removeItem.rawData.bankSpace;
                const result = await cs.setBankSpace(message.author.id, null, ToincreasedAmount);
                if (!result.error) return message.reply(`Successfully set Bank Limit to ${ToincreasedAmount}`);
                else return message.reply(`Successfully set Bank Limit to ${ToincreasedAmount}`);
    
            } else return message.reply("Please buy the item first!")
        };
        // cs.setBankSpace(message.author.id, null, 0).then(console.log)
    }
}
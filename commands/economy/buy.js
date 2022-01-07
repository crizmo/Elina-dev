const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "buy",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Buy command",

    async execute(client, message, args, Discord) {
        let thing = args[0]
        if (!thing) return message.channel.send('Please provide item number')
        if (isNaN(thing)) return message.channel.send('Please provide valid item number')
        let result = await cs.buy({
            user: message.author,
            guild: message.guild,
            item: parseInt(args[0])
        });
        if (result.error) {
            if (result.type === 'No-Item') return message.channel.send('Please provide valid item number');
            if (result.type === 'Invalid-Item') return message.channel.send('item does not exists');
            if (result.type === 'low-money') return message.channel.send(`**You don't have enough balance to buy this item!**`);
        } else 
            return message.channel.send(`**Successfully bought  \`${result.inventory.name}\` for __${result.inventory.price}__ ¥**`)  
    }
}
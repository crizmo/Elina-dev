const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "removeitem",
    permissions: ["ADMINISTRATOR"],
    cooldown: 5,
    description: "add item command",

    async execute(client, message, args, Discord) {

        if (!args[0]) return message.channel.send('Which item to remove?')
        let result = await cs.removeItem({
            guild: { id : null },
            item: parseInt(args[0])
        });
        if (result.error) {
            if (result.type == 'Invalid-Item-Number') return message.channel.send('There was a error, Please enter item number to remove !')
            if (result.type == 'Unknown-Item') return message.channel.send('There was a error, The Item Does not exist!')
        } else message.channel.send('Done! Successfully removed the `' + result.inventory.name + '` from shop!')
    }
}
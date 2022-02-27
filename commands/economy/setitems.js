const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

// set items for guilds done

module.exports = {
    name: "setitems",
    permissions: ["ADMINISTRATOR"],
    cooldown: 5,
    description: "Set items command",

    async execute(client, message, args, Discord) {

        if (message.author.id !== '784141856426033233') return message.channel.send("Only Criz can use this command");

        client.guilds.cache.map(guild => {
            cs.setItems({
                guild: guild,
                shop: [{
                    name: 'banknote',
                    price: 5000,
                    description: 'Banknote to increase bank limit'
                }, {
                    name: 'primogems',
                    price: 2500,
                    description: 'Primogems ps- genshin impact currency'
                }]
            });
        })
        return message.channel.send('Elina shop items set.');
    }
}
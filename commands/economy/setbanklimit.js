const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "banklimit",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Balance command",

    async execute(client, message, args, Discord) {

        if(message.author.id !== '784141856426033233') return message.channel.send("U aint Kurizu lol");

        let user = message.mentions.users.first() || message.author;

        let money = args[0];
        if (isNaN(money)) return message.channel.send("Amount is not a number.");

        let result = await cs.setBankSpace(user.id, message.guild.id, money || 0);
        if (result.error) {
            if (result.type === 'no-amount-provided') return message.channel.send('Please provide number to setBank Limit to.');
            else return message.channel.send(`Successfully set Bank Limit of ${user.tag} to ${money}`);
        } else return message.channel.send(`Successfully set Bank Limit of ${user.tag} to ${money}`)
    }
}
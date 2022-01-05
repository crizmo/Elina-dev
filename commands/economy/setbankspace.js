const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
    name: "setbankspace",
    permissions: ["ADMINISTRATOR"],
    cooldown: 5,
    description: "Set bank space command",

    async execute(client, message, args, Discord) {
        const user = message.member.user;

        let result = await cs.setBankSpace(user.id, message.guild.id,  args.join(" ") || 0);
        if (result.error) return message.reply('Please provide number to setBank Limit to.');
        else return message.reply(`Successfully set Bank Limit of ${user.tag} to ${result.amount}`)
    }
}
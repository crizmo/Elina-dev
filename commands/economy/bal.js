const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Balance command",

    async execute(client, message, args, Discord) {

        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]);
            if (user) user = user.user;
        } else if (!args[0]) {
            user = message.author;
        }

        let result = await cs.balance({
            user: user,
            guild: message.guild
        });

        let avatar = user.displayAvatarURL({dynamic: true, size: 1024})

        let embed = new MessageEmbed()
        .setTitle(`${user.username}'s Balance`, user.displayAvatarURL())
        .setColor("RANDOM")
        .setDescription(`Your wallet bal is **${result.wallet}** ¥\nYour bank bal is **${result.bank}** ¥`)
        .setThumbnail(avatar)
        message.channel.send({embeds: [embed]})

        // message.channel.send(`${user.tag}, has $${result.wallet} in you wallet and $${result.bank} in there bank.`);
    }
}
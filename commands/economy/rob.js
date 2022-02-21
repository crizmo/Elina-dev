const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "rob",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Rob command",

    async execute(client, message, args, Discord) {

        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]);
            if (user) user = user.user;;
        }

        if (!user) return message.channel.send('Sorry, you forgot to mention somebody.');
        if (user.bot || user === client.user) return message.channel.send("This user is a bot.");
        if (user === message.author) return message.channel.send("You cannot rob yourself");

        let result = await cs.rob({
            user: message.author,
            user2: user,
            guild: message.guild,
            minAmount: 100,
            successPercentage: 5,
            cooldown: 25, //25 seconds,
            maxRob: 1000
        });

        const errorEmbedTime = new MessageEmbed()
            .setTitle("Woah chill!")
            .setDescription(`You have already robbed recently Try again in ${result.time}`)
            .setColor("#00FFFF")
            .setFooter("For more economy commands do =help-economy")

        const errorEmbedLowMoney = new MessageEmbed()
            .setTitle("Yeet!")
            .setDescription(`You need atleast ${result.minAmount} ¥ to rob somebody.`)
            .setColor("#00FFFF")

        const errorEmbedLowWallet = new MessageEmbed()
            .setTitle("Hmm sucks")
            .setDescription(`${result.user2} have less than ${result.minAmount} ¥ to rob.`)
            .setColor("#00FFFF")

        const errorEmbedCaught = new MessageEmbed()
            .setTitle("Hard luck")
            .setDescription(`${message.author.username} you robbed ${result.user2} and got caught and you payed ${result.amount} to ${result.user2.username}!`)
            .setColor("#00FFFF")
        
        const successEmbed = new MessageEmbed()
            .setTitle("Nice 🧊")
            .setDescription(`${message.author.username} you robbed ${result.user2.username} and got away with ${result.amount}!`)
            .setColor("#00FFFF")

        if (result.error) {
            if (result.type === 'time') return message.channel.send({ embeds: [errorEmbedTime] });
            if (result.type === 'low-money') return message.channel.send({ embeds: [errorEmbedLowMoney] });
            if (result.type === 'low-wallet') return message.channel.send({ embeds: [errorEmbedLowWallet] })
            if (result.type === 'caught') return message.channel.send({ embeds: [errorEmbedCaught] })
        } else {
            if (result.type === 'success') return message.channel.send({ embeds: [successEmbed] })
        }
    }
}
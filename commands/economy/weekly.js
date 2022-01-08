const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "weekly",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Weekly economy command",

    async execute(client, message, args, Discord) {

        let result = await cs.weekly({
            user: message.author,
            guild: message.guild,
            amount: 1000,
        });

        const errorEmbed = new MessageEmbed()
        .setTitle("Oof mate!")
        .setDescription(`You have used weekly recently Try again in ${result.time}`)
        .setColor("#00FFFF")

        if (result.error) return message.channel.send({embeds: [errorEmbed]});

        const weeklyEmbed = new MessageEmbed()
        .setTitle("🧊 Weekly !")
        .setDescription(`Weekly earnings. You earned ${result.amount} ¥.`)
        .addFields(
            {name: '**Streak**', value: `You are on **${result.rawData.streak.weekly}** streak`},
        )
        .setColor("#00FFFF")
        return message.channel.send({embeds: [weeklyEmbed]})
    }
}
const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "monthly",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Monthly economy command",

    async execute(client, message, args, Discord) {

        let result = await cs.monthly({
            user: message.author,
            guild: message.guild,
            amount: 5000,
    
        });

        const errorEmbed = new MessageEmbed()
        .setTitle("AH !")
        .setDescription(`You have used monthly recently Try again in ${result.time}`)
        .setColor("RANDOM")

        if (result.error) return message.channel.send({embeds: [errorEmbed]});

        const monthlyEmbed = new MessageEmbed()
        .setTitle("🧊 O.O !")
        .setDescription(`Monthly earnings. You earned ${result.amount} ¥.`)
        .addFields(
            {name: '**Streak**', value: `You are on **${result.rawData.streak.monthly}** streak`},
        )
        .setColor("RANDOM")
        return message.channel.send({embeds: [monthlyEmbed]})
    }
}
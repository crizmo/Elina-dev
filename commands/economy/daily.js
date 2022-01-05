const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "daily",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Daily economy command",

    async execute(client, message, args, Discord) {

        let result = await cs.daily({
            user: message.author,
            guild: { id : null },
            amount: 1000,
        });

        const errorEmbed = new MessageEmbed()
        .setTitle("Oof mate!")
        .setDescription(`You have used daily recently Try again in ${result.time}`)
        .setColor("#00FFFF")

        if (result.error) return message.channel.send({embeds: [errorEmbed]});

        const dailyEmbed = new MessageEmbed()
        .setTitle("🧊 Daily Earnings !")
        .setDescription(`Daily earnings. You earned **${result.amount}** ¥.`)
        .addFields(
            {name: '**Streak**', value: `You are on **${result.rawData.streak.daily}** streak`},
        )
        .setColor("#00FFFF")
        return message.channel.send({embeds: [dailyEmbed]})

    }
}
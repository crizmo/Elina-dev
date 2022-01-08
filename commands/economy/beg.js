const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "beg",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Beg command",

    async execute(client, message, args, Discord) {

        let result = await cs.beg({
            user: message.author,
            guild: message.guild,
            minAmount: 1,
            maxAmount: 500
        });

        const people = [
            "Criz",
            "Elon musk",
            "Donald trump",
            "Cristiano Ronaldo",
            "Elina",
            "DaBaby",
            "Taiga",
            "Lelouch Lamperouge",
            "Levi Ackerma",
            "Light Yagami",
            "Hinata Hyuga",
            "Pakunoda",
            "Asuna"
        ];

        const randomName = people.sort(() => Math.random() - Math.random()).slice(0, 1);

        const errorEmbed = new MessageEmbed()
        .setTitle("Chill mate!")
        .setDescription(`You have begged recently Try again in ${result.time} `)
        .setFooter("For more economy commands do =help")
        
        const begEmbed = new MessageEmbed()
        .setTitle("Imagine begging")
        .setDescription(`${randomName} gave you __${result.amount}__ ¥.`)

        if (result.error) return message.channel.send({embeds: [errorEmbed]});
        else message.channel.send({embeds: [begEmbed]})
    }
}
const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "work",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Work command",

    async execute(client, message, args, Discord) {

        let result = await cs.work({
            user: message.author,
            guild: { id : null },
            maxAmount: 500,
            replies: ['Programmer', 'Builder', 'Waiter', 'Busboy', 'Chief', 'Mechanic' , 'Moderator'],
            cooldown: 60 //60 seconds,

        });

        const errorEmbed = new MessageEmbed()
        .setTitle("Woah chill!")
        .setDescription(`You have already worked recently Try again in ${result.time} `)
        .setColor("#00FFFF")
        .setFooter("For more economy commands do =help-economy")
        

        const workEmbed = new MessageEmbed()
        .setTitle("Nice 🧊")
        .setDescription(`You worked as a ${result.workType} and earned __${result.amount}__ ¥.`)
        .setColor("#00FFFF")

        if (result.error) return message.channel.send({embeds: [errorEmbed]});

        else message.channel.send({embeds: [workEmbed]})
    }
}
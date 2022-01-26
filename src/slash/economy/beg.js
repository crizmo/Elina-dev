const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const cooldowns = new Map()
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beg')
		.setDescription('Earnings method - beg!'),

    // permissions: [ Permissions.FLAGS. ],
    // cooldown: 1 * 60,
	async execute(interaction, client) {

        let result = await cs.beg({
            user: interaction.user,
            guild: interaction.guild,
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

        if (result.error) return interaction.reply({embeds: [errorEmbed]});
        else interaction.reply({embeds: [begEmbed]})
        
	},
};
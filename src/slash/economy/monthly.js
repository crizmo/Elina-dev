const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('monthly')
		.setDescription('Monthly economy command!'),
	async execute(interaction, client) {

        let result = await cs.monthly({
            user: interaction.user,
            guild: interaction.guild,
            amount: 5000,
        });

        const errorEmbed = new MessageEmbed()
        .setTitle("AH !")
        .setDescription(`You have used monthly recently Try again in ${result.time}`)
        .setColor("RANDOM")

        if (result.error) return interaction.reply({embeds: [errorEmbed]});

        const monthlyEmbed = new MessageEmbed()
        .setTitle("🧊 O.O !")
        .setDescription(`Monthly earnings. You earned ${result.amount} ¥.`)
        .addFields(
            {name: '**Streak**', value: `You are on **${result.rawData.streak.monthly}** streak`},
        )
        .setColor("RANDOM")
        return interaction.reply({embeds: [monthlyEmbed]})

	},
};
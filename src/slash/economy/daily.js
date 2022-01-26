const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('daily')
		.setDescription('Daily economy command!'),
	async execute(interaction, client) {

        let result = await cs.daily({
            user: interaction.user,
            guild: interaction.guild,
            amount: 1000,
        });

        const errorEmbed = new MessageEmbed()
        .setTitle("Oof mate!")
        .setDescription(`You have used daily recently Try again in ${result.time}`)
        .setColor("#00FFFF")

        if (result.error) return interaction.reply({embeds: [errorEmbed]});

        const dailyEmbed = new MessageEmbed()
        .setTitle("🧊 Daily Earnings !")
        .setDescription(`Daily earnings. You earned **${result.amount}** ¥.`)
        .addFields(
            {name: '**Streak**', value: `You are on **${result.rawData.streak.daily}** streak`},
        )
        .setColor("#00FFFF")
        return interaction.reply({embeds: [dailyEmbed]})

	},
};
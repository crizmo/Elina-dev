const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('work')
		.setDescription('Earnings method - work!'),

	async execute(interaction, client) {

        let result = await cs.work({
            user: interaction.user,
            guild: interaction.guild,
            maxAmount: 500,
            replies: ['Programmer', 'Builder', 'Waiter', 'Busboy', 'Chief', 'Mechanic' , 'Moderator'],
            cooldown: 60 //60 seconds,

        });

        const errorEmbed = new MessageEmbed()
        .setTitle("Woah chill!")
        .setDescription(`You have already worked recently Try again in ${result.time} `)
        .setColor("#00FFFF")
        .setFooter("For more economy commands do /help-eco")
        

        const workEmbed = new MessageEmbed()
        .setTitle("Nice 🧊")
        .setDescription(`You worked as a ${result.workType} and earned __${result.amount}__ ¥.`)
        .setColor("#00FFFF")

        if (result.error) return interaction.reply({embeds: [errorEmbed]});

        else interaction.reply({embeds: [workEmbed]})
        
	},
};
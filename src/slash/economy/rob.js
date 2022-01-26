const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const cooldowns = new Map()
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rob')
		.setDescription('Earnings method - rob!')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),

    // permissions: [ Permissions.FLAGS. ],
    // cooldown: 1 * 60,
	async execute(interaction, client) {

        const user = interaction.options.getUser('user');

        if (user.bot || user === client.user) return interaction.reply("You cannot rob a bot lol.");
        if (user === interaction.user) return interaction.reply("You cannot rob yourself")

        let result = await cs.rob({
            user: interaction.user,
            user2: user,
            guild: interaction.guild,
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
            .setDescription(`${interaction.user.username} you robbed ${result.user2} and got caught and you payed ${result.amount} to ${result.user2.username}!`)
            .setColor("#00FFFF")
        
        const successEmbed = new MessageEmbed()
            .setTitle("Nice 🧊")
            .setDescription(`${interaction.user.username} you robbed ${result.user2.username} and got away with ${result.amount}!`)
            .setColor("#00FFFF")

        if (result.error) {
            if (result.type === 'time') return interaction.reply({ embeds: [errorEmbedTime] });
            if (result.type === 'low-money') return interaction.reply({ embeds: [errorEmbedLowMoney] });
            if (result.type === 'low-wallet') return interaction.reply({ embeds: [errorEmbedLowWallet] })
            if (result.type === 'caught') return interaction.reply({ embeds: [errorEmbedCaught] })
        } else {
            if (result.type === 'success') return interaction.reply({ embeds: [successEmbed] })
        }
        
	},
};
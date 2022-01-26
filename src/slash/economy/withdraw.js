const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('withdraw')
		.setDescription('Withdraw yen in bank !')
		.addIntegerOption(option => option.setName('amount').setDescription('Enter amount you want to withdraw').setRequired(true)),

    // permissions: [ Permissions.FLAGS.ADMINISTRATOR ],
	async execute(interaction, client) {

        let money = interaction.options.getInteger('amount');
        if (!money) return interaction.reply("Enter the amount you want to deposit.");
    
        let result = await cs.withdraw({
            user: interaction.user,
            guild: interaction.guild,
            amount: money
        });
        if (result.error) {
            if (result.type === 'money') return interaction.reply("Specify an amount to withdraw")
            if (result.type === 'negative-money') return interaction.reply("You can't withdraw negative yen, please use deposit command")
            if (result.type === 'low-money') return interaction.reply("You don't have that much yen in bank.")
            if (result.type === 'no-money') return interaction.reply("You don't have any yen to withdraw")
        } else {
            if (result.type === 'all-success') return interaction.reply("You have withdraw'd all your yen from your bank")
            if (result.type === 'success') return interaction.reply(`You have withdraw ${result.amount} ¥ from your bank.`)
        }
      
	},
};
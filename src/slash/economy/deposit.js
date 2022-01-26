const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deposit')
		.setDescription('Deposit yen in bank !')
		.addIntegerOption(option => option.setName('amount').setDescription('Enter amount you want to deposit').setRequired(true)),

    // permissions: [ Permissions.FLAGS.ADMINISTRATOR ],
	async execute(interaction, client) {

        let money = interaction.options.getInteger('amount');
        if (!money) return interaction.reply("Enter the amount you want to deposite.");
    
        let result = await cs.deposite({
            user: interaction.user,
            guild: interaction.guild,
            amount: interaction.options.getInteger('amount')
        });
        if (result.error) {
            if (result.type === 'money') return interaction.reply("Specify an amount to deposite");
            if (result.type === 'negative-money') return interaction.reply("You can't deposite negative yen");
            if (result.type === 'low-money') return interaction.reply("You don't have that much yen in wallet.");
            if (result.type === 'no-money') return interaction.reply("You don't have any yen to deposite");
            if (result.type === 'bank-full') return message.reply("Your bank is full. It has reached it's limit.");
        } else {
            if (result.type === 'all-success') return interaction.reply("You have deposited all your yen to your bank or your bank is __full__");
            if (result.type === 'success') return interaction.reply(`You have deposited ${result.amount} ¥ to your bank.`);
        }
      
	},
};
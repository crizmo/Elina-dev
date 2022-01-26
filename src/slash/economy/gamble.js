const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gamble')
		.setDescription('Earnings method - gamble !')
		.addIntegerOption(option => option.setName('amount').setDescription('Enter amount you want to deposit').setRequired(true)),
	async execute(interaction, client) {

        let money = interaction.options.getInteger('amount');
        if (isNaN(money)) return interaction.reply("Amount is not a number.");

        let result = await cs.gamble({
            user: interaction.user,
            guild: interaction.guild,
            amount: interaction.options.getInteger('amount'),
            minAmount: 1,
            cooldown: 60 //60 seconds
        });
        if (result.error) {
            if (result.type == 'amount') return interaction.reply("Please insert an amount first.");
            if (result.type == 'nan') return interaction.reply("The amount was not a number.");
            if (result.type == 'low-money') return interaction.reply(`You don't have enough yen. You need ${result.neededMoney} ¥ more to perform the action. `);
            if (result.type == 'gamble-limit') return interaction.reply(`You don't have enough yen for gambling. The minimum was ${result.minAmount} ¥.`);
            if (result.type == 'time') return interaction.reply(`Wooo that is too fast. You need to wait **${result.second}** before you can gamble again.`);   
        } else {
            if (result.type == 'lost') return interaction.reply(`Ahh, no. You lose ${result.amount} ¥. You've ${result.wallet} ¥ left. Good luck next time.`);
            if (result.type == 'won') return interaction.reply(`Woohoo! You won ${result.amount} ¥! You've ${result.wallet} ¥. Good luck, have fun!`);
        }
      
	},
};
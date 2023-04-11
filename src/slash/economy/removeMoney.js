const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('removemoney')
		.setDescription('Remove Money from a user!')
		.addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
		.addIntegerOption(option => option.setName('amount').setDescription('Enter amount').setRequired(true)),

    permissions: [ Permissions.FLAGS.ADMINISTRATOR ],
	async execute(interaction, client) {

        if(interaction.user.id !== '784141856426033233') return interaction.reply("U aint Kurizu lol");

		if (interaction.options.getInteger('amount') < 1) return interaction.reply("You can't remove money less than 1 ¥!");
        let wheretoPutMoney = "wallet"; //or bank
        let amount = interaction.options.getInteger('amount');
        if (!amount) return interaction.reply("Enter amount of money to remove.");
        let money = (amount);
        
        let result = await cs.removeMoney({
            user: interaction.options.getUser('user'),
            guild: interaction.guild,
            amount: money,
            wheretoPutMoney: wheretoPutMoney
        });
        if (result.error) return interaction.reply("You cant Remove negitive money");
        else interaction.reply(`Successfully Removed ${money} ¥ of ${interaction.user.username}, ( from ${wheretoPutMoney} )`)
                
	},
};
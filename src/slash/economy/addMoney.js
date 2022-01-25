const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addmoney')
		.setDescription('Add Money to a user!')
		.addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
		.addIntegerOption(option => option.setName('price').setDescription('Enter an integer').setRequired(true)),

    permissions: [ Permissions.FLAGS.ADMINISTRATOR ],
	async execute(interaction, client) {

        if(interaction.user.id !== '784141856426033233') return interaction.reply("U aint criz lol");

		if (interaction.options.getInteger('price') < 1) return interaction.reply("You can't add money less than 1 ¥!");
        let wheretoPutMoney = "wallet"; //or bank
        let amount = interaction.options.getInteger('price');
        if (!amount) return interaction.reply("Enter amount of money to Add.");
        let money = (amount);
        
        let result = await cs.addMoney({
        user: interaction.options.getUser('user'),
        guild: interaction.guild,
        amount: money,
        wheretoPutMoney: wheretoPutMoney
        });
        if (result.error) return interaction.reply("You cant add negitive money");
        else interaction.reply(`Successfully added ${money} ¥ to ${interaction.user.username}, ( in ${wheretoPutMoney} )`)
                
	},
};
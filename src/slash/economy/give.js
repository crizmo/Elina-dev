const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('give')
		.setDescription('Give Money to a user!')
		.addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
		.addIntegerOption(option => option.setName('amount').setDescription('Enter amount you want to give').setRequired(true)),

	async execute(interaction, client) {

        const user = interaction.options.getUser('user');

		if (interaction.options.getInteger('amount') < 1) return interaction.reply("You can't give money less than 1 ¥!");
        if (!user) return interaction.reply('Sorry, you forgot to mention somebody.');
        if (user.bot || user === client.user) return interaction.reply("This user is a bot.");

        let amount = interaction.options.getInteger('amount');
        if (!amount) return interaction.reply("Enter amount of yen to add.");

        let result = await cs.transferMoney({
            user: interaction.user,
            user2: user,
            guild: interaction.guild,
            amount: amount
        });
        if (result.error) return interaction.reply(`You don't have enough yen in your wallet.`);
        else interaction.reply(`**${interaction.user.username}**, Successfully transfered **${result.money}** to **${result.user2.username}**`)
                
	},
};
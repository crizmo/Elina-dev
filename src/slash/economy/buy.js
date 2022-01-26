const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('buy')
		.setDescription('Buy shop item !')
		.addIntegerOption(option => option.setName('item_number').setDescription('Enter an integer').setRequired(true)),

    // permissions: [ Permissions.FLAGS.ADMINISTRATOR ],
	async execute(interaction, client) {

        let thing = interaction.options.getInteger('item_number');
        if (!thing) return interaction.reply('Please provide item number')
        if (isNaN(thing)) return interaction.reply('Please provide valid item number')
        let result = await cs.buy({
            user: interaction.user,
            guild: interaction.guild,
            item: interaction.options.getInteger('item_number')
        });
        if (result.error) {
            if (result.type === 'No-Item') return interaction.reply('Please provide valid item number');
            if (result.type === 'Invalid-Item') return interaction.reply('item does not exists');
            if (result.type === 'low-money') return interaction.reply(`**You don't have enough balance to buy this item!**`);
        } else return interaction.reply(`**Successfully bought  \`${result.inventory.name}\` for __${result.inventory.price}__ ¥**`)  
      
	},
};
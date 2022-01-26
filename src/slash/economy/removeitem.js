const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('removeitem')
		.setDescription('Remove item from the shop!')
		.addIntegerOption(option => option.setName('item_number').setDescription('Enter item number of the item').setRequired(true)),

    permissions: [ Permissions.FLAGS.ADMINISTRATOR ],
	async execute(interaction, client) {

        let result = await cs.removeItem({
            guild: interaction.guild,
            item: interaction.options.getInteger('item_number')
        });
        if (result.error) {
            if (result.type == 'Invalid-Item-Number') return interaction.reply('There was a error, Please enter item number to remove !')
            if (result.type == 'Unknown-Item') return interaction.reply('There was a error, The Item Does not exist!')
        } else interaction.reply('Done! Successfully removed the `' + result.inventory.name + '` from shop!')
	},
};
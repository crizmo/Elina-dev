const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('additem')
		.setDescription('Additem to a user from the shop!')
		.addStringOption(option => option.setName('name').setDescription('Enter a string').setRequired(true))
		.addIntegerOption(option => option.setName('price').setDescription('Enter an integer').setRequired(true))
		.addStringOption(option => option.setName('description').setDescription('Enter a string').setRequired(true)),

    permissions: [ Permissions.FLAGS.ADMINISTRATOR ],
	async execute(interaction, client) {

		await interaction.deferReply();
		if (interaction.options.getInteger('price') < 1) return interaction.editReply("You can't add an item for less than 1 ¥!");
		let result = await cs.addItem({
			guild: interaction.guild,
			inventory: {
				name: interaction.options.getString('name'),
				price: interaction.options.getInteger('price'),
				description: interaction.options.getString('description') || 'No Description'
			}
		});
		if (result.error) {
			if (result.type == 'No-Inventory-Name') return interaction.editReply('There was a error, Please enter item name to add.!')
			if (result.type == 'Invalid-Inventory-Price') return interaction.editReply('There was a error, invalid price!')
			if (result.type == 'No-Inventory-Price') return interaction.editReply('There was a error, You didnt specify price!')
			if (result.type == 'No-Inventory') return interaction.editReply('There was a error, No data recieved!')
		} else return interaction.editReply('Done! Successfully added `' + interaction.options.getString('name') + '` to the shop!')

		// const name = interaction.options.getString('name');
		// const price = interaction.options.getInteger('int');
		// const description = interaction.options.getString('description');
                
	},
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('inventory')
		.setDescription('To check user inventory!'),
	async execute(interaction, client) {

        const user = interaction.user;
        let result = await cs.getUserItems({
            user: user,
            guild: interaction.guild,
        });
        let inv = result.inventory.slice(0, 10)
        const embed = new MessageEmbed()
            .setTitle('Your Inventory in Empty!')
        for (key of inv) {
            embed.addField(`**${key.name}:**`, `Amount: ${key.amount}`);
            embed.setTitle('Your Inventory!')

        }
        return interaction.reply({
            embeds: [embed]
        })

	},
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const akinator = require("discord.js-akinator");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aki')
		.setDescription('To start akinator!'),
	async execute(CommandInteraction, client) {
        akinator(CommandInteraction, client);
	},
};
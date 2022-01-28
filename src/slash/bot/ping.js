const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction, client) {
			
			const ping = new MessageEmbed()
			.setTitle("Elina's ping")
			.setDescription(`Pong! Elina has \`${client.ws.ping}\` ms ping 🏓`)
			.setFooter(client.user.tag , client.user.displayAvatarURL())
			.setTimestamp()
		
			await interaction.reply({ embeds: [ping], components: [row] });
	},
};
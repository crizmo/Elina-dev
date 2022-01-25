const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Coinflip command usage and information!'),
        
	async execute(interaction, client) {

        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];

        const embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setDescription(`You flipped a **${choice}**!`)
        await interaction.reply({embeds: [embed]});
	},  
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Avatar command usage and information!')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),
        
	async execute(interaction, client) {

        const user = interaction.options.getUser('user');

        let person = interaction.options.getUser('user');
        let avatar = person.displayAvatarURL({dynamic: true, size: 1024})

        const userEmbed = new MessageEmbed()

        .setTitle(`${user.username}'s Avatar:`)
        .setImage(avatar)

        await interaction.reply({ embeds: [userEmbed]})
	},  
};
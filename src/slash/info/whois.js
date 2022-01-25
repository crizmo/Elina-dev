const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whois')
		.setDescription('Whois command usage and information!')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),
        
	async execute(interaction, client) {

        const { guild, channel } = interaction

        const user = interaction.options.getUser('user');
        const member = guild.members.cache.get(user.id)

        let person = interaction.options.getUser('user');
        let avatar = person.displayAvatarURL({dynamic: true, size: 1024})

        const userEmbed = new MessageEmbed()
        .setTitle(`${user.username}'s Information:`)
        .setDescription("User info command to get information of a user.")
        .setAuthor(`${user.username}`, avatar )
        .setThumbnail(avatar)
        .addFields(
            {name: `Username:`, value: `${user.username}`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Tag:`, value: `#${user.discriminator}`, inline: true},
            {name: `Created at:`, value: `${user.createdAt.toLocaleString()}`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Joined at:`, value: `${member.joinedAt.toLocaleString()}`, inline: true},
            {name: `Booster:`, value: `${member.premiumSince ? 'since ' + member.premiumSince.toLocaleString() : 'Nope'}`, inline: true},
            {name: `\u200B`, value: `\u200B`, inline: true},
            {name: `Bot:`, value: `${user.bot}`, inline: true}
        )
        .setTimestamp()
        .setColor("BLACK")

        await interaction.reply({ embeds: [userEmbed]})
	},  
};
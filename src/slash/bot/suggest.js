const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggest')
		.setDescription('Suggest command usage and information!')
        .addChannelOption(option => option.setName('channel').setDescription('The input to echo back').setRequired(true))
        .addStringOption(option => option.setName('details').setDescription('The input back').setRequired(true)),
        
	async execute(interaction, client) {

        const channel = interaction.options.getChannel('channel');
        const query = interaction.options.getString('details');

        if(channel && query){

        const embed = new MessageEmbed()
        .setTitle('New Suggestion!')
        .addField('Author',`${interaction.user.username}`, true)
        .addField('Guild', interaction.guild.name, true)
        .addField('Suggestion', query)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()

        let msgEmbed = await channel.send({embeds: [embed]});
        await msgEmbed.react('👍')

        await interaction.reply("**Suggestion has been sent!**")
        } else {
            await interaction.reply("Incorrect usage");
        }
	},  
};
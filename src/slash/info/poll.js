const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poll')
		.setDescription('Suggest command usage and information!')
        .addChannelOption(option => option.setName('channel').setDescription('Suggestion channel').setRequired(true))
        .addStringOption(option => option.setName('details').setDescription('Suggestion details').setRequired(true)),
        
	async execute(interaction, client) {

        const channel = interaction.options.getChannel('channel');
        const query = interaction.options.getString('details');

        if(channel && query){

        const embed = new MessageEmbed()
        .setTitle(`New Poll by ${interaction.user.username} !`)
        .addField('Poll', query)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()

        let msgEmbed = await channel.send({embeds: [embed]});
        await msgEmbed.react('✅')
        await msgEmbed.react('❎')

        await interaction.reply("**Poll has been sent!**")
        } else {
            await interaction.reply("Incorrect usage");
        }
	},  
};
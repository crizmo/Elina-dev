const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('qr')
		.setDescription('Qr code command usage and information!')
        .addStringOption(option => option.setName('message').setDescription('Message to be encoded').setRequired(true)),
        
	async execute(interaction, client) {

        const query = interaction.options.getString('message');

        if(query){

        const embed = new MessageEmbed()

        .setColor("WHITE")
        .setImage(encodeURI(`https://chart.googleapis.com/chart?chl=${query}&chs=200x200&cht=qr&chld=H%7C0`))
        .setTimestamp()

        await interaction.reply({embeds: [embed]});
        } else {
            await interaction.reply("Incorrect usage");
        }
	},  
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whoasked')
		.setDescription('Whoasked command usage and information!')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),
        
	async execute(interaction, client) {

        const person = interaction.options.getUser('user');

        if(person){
            const firstEmbed = new MessageEmbed()
            .setDescription(`**${person.username}**, ${interaction.user.username} is searching for who asked!
            Now playing: 
            Who Asked (Feat. Nobody Did)
            ──────────────⚪
            ◄◄⠀▐▐⠀►► 3:56 / 𝟹:𝟻𝟼⠀───○ 🔊`);
            await interaction.reply({embeds: [firstEmbed]})
        } else {
            const firstEmbed = new MessageEmbed()
            .setDescription(`Now playing: 
            Who Asked (Feat. Nobody Did)
            ──────────────⚪
            ◄◄⠀▐▐⠀►► 3:56 / 𝟹:𝟻𝟼⠀───○ 🔊`);
            await interaction.reply({embeds: [firstEmbed]})
        }
	},  
};
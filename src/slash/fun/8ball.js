const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('8ball command usage and information!')
        .addStringOption(option => option.setName('question').setDescription('8ball question').setRequired(true)),
        
	async execute(interaction, client) {

        const query = interaction.options.getString('question');

        let responses = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.", "Yes.", "Yes – definitely.", "You may rely on it."]
  
        let response = Math.floor(Math.random() * responses.length)

        if(query){

        const embed = new MessageEmbed()
        .setTitle(`To answer ${interaction.user.username}'s questions`)
        .addField('Question',query)
        .addField('Answer:', responses[response])
        .setThumbnail(interaction.user.displayAvatarURL())
        .setTimestamp()

        await interaction.reply({embeds: [embed]});
        } else {
            await interaction.reply("Incorrect usage");
        }
	},  
};
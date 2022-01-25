const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eject')
		.setDescription('Eject command usage and information!')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true)),
        
	async execute(interaction, client) {

        suslinks = ['https://media1.tenor.com/images/f44ac2abdafc97a6d5db85e026d4a838/tenor.gif',
        'https://i.kym-cdn.com/photos/images/original/001/893/924/569.gif',
        'https://64.media.tumblr.com/7898d087981456a594c2313bbd7b93f3/e1f2f0b0f27e0eef-7a/s500x750/3f491f707d84734d797f6ed1551e3143af5d3862.gif']
        susmessage = ['That user was the imposter',
        'That user was not the imposter',
        'That user was not the imposter']
        
        const randomNum = Math.floor(Math.random() * Math.floor(susmessage.length))
        const person = interaction.options.getUser('user');

        if(person){

            const embed = new MessageEmbed()

            .setTitle(`${interaction.user.username} ejected ${person.username}`)
            .setDescription(susmessage[randomNum])
            .setImage(suslinks[randomNum])
    
            await interaction.reply({embeds: [embed]});
        } else {
             await interaction.reply("Who do you want to eject ?!");
        }
	},  
};
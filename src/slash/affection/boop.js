const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boop')
		.setDescription('Boop command usage and information!')
        .addUserOption(option => option.setName("target").setDescription("The user mentioned")),


	async execute(interaction, client) {

            boopLinks = [ 'https://media.tenor.com/images/9945480efe5179c227558769613ee275/tenor.gif',
            'https://media1.tenor.com/images/cbf38a2e97a348a621207c967a77628a/tenor.gif?itemid=6287077',
            'http://i.imgur.com/fZmUTgw.gif',
            'https://66.media.tumblr.com/9a457a43bcae3ebaafda53d7fe6f572d/tumblr_pqjm6cCRt41th206io1_1280.gif',
            'https://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-9.gif',
            'https://media1.tenor.com/images/0da232de2ee45e1464bf1d5916869a39/tenor.gif?itemid=16935454' ]
            
            const randomNum = Math.floor(Math.random() * Math.floor(boopLinks.length))

            const user = interaction.options.getUser("target")

            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username} booped ${user.username} !`)
                    .setDescription("Boop :o")
                    .setImage(boopLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} booped , but who ??`)
                    .setDescription("Boop :o")
                    .setImage(boopLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")

                await interaction.reply({ embeds: [userEmbed1]})
            }
	},
};
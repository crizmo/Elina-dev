const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pet')
		.setDescription('pet command usage and information!')
        .addUserOption(option => option.setName("target").setDescription("The user mentioned")),

	async execute(interaction, client) {

            petLinks = [ 'https://cdn.discordapp.com/attachments/810026230089908256/843546732990169138/image0.gif',
                'https://cdn.discordapp.com/attachments/810026230089908256/843546734209794109/image4.gif',
                'https://cdn.discordapp.com/attachments/810026230089908256/843546733341966356/image1.gif',
                'https://cdn.discordapp.com/attachments/810026230089908256/843546734734999573/image5.gif']
            
            const randomNum = Math.floor(Math.random() * Math.floor(petLinks.length))

            const user = interaction.options.getUser("target")
            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username} petted ${user.username} !`)
                    .setDescription("pet :q")
                    .setImage(petLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Happy petting :D");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} petted , but who ??`)
                    .setDescription("pet :q")
                    .setImage(petLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Happy petting :D");

                await interaction.reply({ embeds: [userEmbed1]})
            }
	},
};
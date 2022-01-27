const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('slap')
		.setDescription('Slap command usage and information!')
        .addUserOption(option => option.setName("target").setDescription("The user mentioned")),

	async execute(interaction, client) {

            slapLinks = [ 'https://media.tenor.com/images/9e7a8a7473f6535081805f0e85b7a09f/tenor.gif',
                'https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif',
                'https://i.imgur.com/fm49srQ.gif',
                'https://i.pinimg.com/originals/1c/8f/0f/1c8f0f43c75c11bf504b25340ddd912d.gif',
                'https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-18.gif',
                'https://i.pinimg.com/originals/1e/59/ec/1e59ecec2c4231509f633c7cea00e78d.gif' ]
            
            const randomNum = Math.floor(Math.random() * Math.floor(slapLinks.length))

            const user = interaction.options.getUser("target")
            const member = interaction.options.getMember("target") || interaction.member
            let avatar = member.displayAvatarURL()
            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username} slapped ${user.username} !`)
                    .setDescription("Damn :c")
                    .setImage(slapLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Why tho ?!");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} slapped , but who ??`)
                    .setDescription("Jeez :v")
                    .setImage(slapLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Imagine slapping noone ;D");

                await interaction.reply({ embeds: [userEmbed1]})
            }
	},
};
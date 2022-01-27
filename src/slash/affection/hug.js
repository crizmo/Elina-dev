const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Hug command usage and information!')
        .addUserOption(option => option.setName("target").setDescription("The user mentioned")),

	async execute(interaction, client) {

            hugLinks = [ 'https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif',
                'https://media1.tenor.com/images/b8a6eed08e17e94dad7eada8c63b69f5/tenor.gif?itemid=17363491',
                'https://i.gifer.com/2QEa.gif',
                'https://i.pinimg.com/originals/6d/b5/4c/6db54c4d6dad5f1f2863d878cfb2d8df.gif',
                'https://media.discordapp.net/attachments/810026230089908256/836132603760345088/image1.gif',
                'https://media.discordapp.net/attachments/810026230089908256/836132603446296616/image0.gif' ]
            
            const randomNum = Math.floor(Math.random() * Math.floor(hugLinks.length))

            const user = interaction.options.getUser("target")
            const member = interaction.options.getMember("target") || interaction.member
            let avatar = member.displayAvatarURL()
            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username} hugged ${user.username} !`)
                    .setDescription("Hug :o")
                    .setImage(hugLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Happy hugging :D");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} hugged , but who ??`)
                    .setDescription("hug :o")
                    .setImage(hugLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Happy hugging :D");

                await interaction.reply({ embeds: [userEmbed1]})
            }
	},
};
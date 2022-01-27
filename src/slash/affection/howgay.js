const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('howgay')
		.setDescription('Boop command usage and information!')
        .addUserOption(option => option.setName("target").setDescription("The user mentioned")),

	async execute(interaction, client) {
        const user = interaction.options.getUser("target")
        const member = interaction.options.getMember("target") || interaction.member
        let rng = Math.floor(Math.random() * 101);
        let avatar = member.displayAvatarURL()

        if (user){
            const userEmbed = new MessageEmbed()
                .setTitle(`Checking how gay ${user.username} is !`)
                .setDescription(`${user.username} is ` + rng + "% Gay🌈")
                .setThumbnail(avatar)
                .setTimestamp()
                .setColor("RANDOM")

            await interaction.reply({ embeds: [userEmbed]})
        } else {
            const userEmbed1 = new MessageEmbed()
                .setTitle(`Let's see how gay ${interaction.user.username} is !`)
                .setDescription(`${interaction.user.username} is ` + rng + "% Gay🌈")
                .setThumbnail(avatar)
                .setTimestamp()
                .setColor("RANDOM")

            await interaction.reply({ embeds: [userEmbed1]})
        }
	},
};
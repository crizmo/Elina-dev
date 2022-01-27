const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('horny')
		.setDescription('Horny command usage and information!')
        .addUserOption(option => option.setName("target").setDescription("The user mentioned")),

	async execute(interaction, client) {
            
            let rng = Math.floor(Math.random() * 101);
            const rngIndex = Math.floor(rng / 10);
            const rngLevel = "😏".repeat(rngIndex) + "🤖".repeat(10 - rngIndex);

            const user = interaction.options.getUser("target")
            const member = interaction.options.getMember("target") || interaction.member
            let avatar = member.displayAvatarURL()

            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`Let's check if ${user.username} is horny!`)
                    .addFields(
                        {name: `\u200B`, value: `${user.username} is ` + rng + " % Horny 😏"},
                        {name: `\u200B`, value: `${rngLevel}`},
                    )
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setThumbnail(avatar)
                    .setFooter("Why horni :o");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`Let's check if ${interaction.user.username} is horny`)
                    .addFields(
                        {name: `\u200B`, value: `${interaction.user.username} is ` + rng + " % Horny 😏"},
                        {name: `\u200B`, value: `${rngLevel}`},
                    )
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setThumbnail(avatar)
                    .setFooter("why horny :?");

                await interaction.reply({ embeds: [userEmbed1]})
            }
	},
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('match')
		.setDescription('Match command usage and information!')
        .addUserOption(option => option.setName("with").setDescription("The user mentioned")),

	async execute(interaction, client) {

            let rng = Math.floor(Math.random() * 101);
            const rngIndex = Math.floor(rng / 10);
            const rngLevel = "💖".repeat(rngIndex) + "💔".repeat(10 - rngIndex);

            const user = interaction.options.getUser("with")
            const member = interaction.options.getMember("with") || interaction.member
            let avatar = member.displayAvatarURL()
            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username} lets check ur match !`)
                    .addFields(
                        {name: "Matching !!", value: `${interaction.user.username} matched with ${user.username} by ` + rng + " %"},
                        {name: `\u200B`, value: `${rngLevel}`},
                    )
                    .setTimestamp()
                    .setColor("RED")
                    .setFooter("Good match ?!");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} is matching with (him/her/they/it)self ??`)
                    .addFields(
                        {name: `\u200B`, value: "Damn bro , u lonely ?"},
                    )
                    .setTimestamp()
                    .setColor("RED")
                    .setThumbnail(avatar)
                    .setFooter(":< Heres a hug from me 🤗");

                await interaction.reply({ embeds: [userEmbed1]})
            }
	},
};
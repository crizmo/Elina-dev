const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('howgay')
		.setDescription('Boop command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("user")
            .setDescription("Check how gay a user is")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get boop command info")),

	async execute(interaction, client) {
        const user = interaction.options.getUser("target")
        if (!user) return interaction.reply("Mention a name");

		if (interaction.options.getSubcommand() === "user"){

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
                    .setDescription(`${user.username} is ` + rng + "% Gay🌈")
                    .setThumbnail(avatar)
                    .setTimestamp()
                    .setColor("RANDOM")

                await interaction.reply({ embeds: [userEmbed1]})
            }
        } else if (interaction.options.getSubcommand() === "info"){
            const howgayinfo = new MessageEmbed()
                .setTitle("Howgay command")
                .setDescription("Howgay command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\ /howgay \`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\ /howgay user @member \`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");
               
            await interaction.reply({ embeds: [howgayinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};
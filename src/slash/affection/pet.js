const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pet')
		.setDescription('pat command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("user")
            .setDescription("Pat a member")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get pat command info")),

	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user"){

            patLinks = [ 'https://cdn.discordapp.com/attachments/810026230089908256/843546732990169138/image0.gif',
                'https://cdn.discordapp.com/attachments/810026230089908256/843546734209794109/image4.gif',
                'https://cdn.discordapp.com/attachments/810026230089908256/843546733341966356/image1.gif',
                'https://cdn.discordapp.com/attachments/810026230089908256/843546734734999573/image5.gif']
            
            const randomNum = Math.floor(Math.random() * Math.floor(patLinks.length))

            const user = interaction.options.getUser("target")
            const member = interaction.options.getMember("target") || interaction.member
            let avatar = member.displayAvatarURL()
            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username} patted ${user.username} !`)
                    .setDescription("pat :q")
                    .setImage(patLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Happy patting :D");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} patted , but who ??`)
                    .setDescription("pat :q")
                    .setImage(patLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Happy patting :D");

                await interaction.reply({ embeds: [userEmbed1]})
            }
        } else if (interaction.options.getSubcommand() === "info"){
            const patinfo = new MessageEmbed()
                .setTitle("Pat command")
                .setDescription("Pat command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\/pat\`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\/pat user @member\`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setImage("https://media.discordapp.net/attachments/912047994713550928/913627217790119996/unknown.png?width=316&height=336")
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");
               
            await interaction.reply({ embeds: [patinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('kiss command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("user")
            .setDescription("Kiss a member")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get kiss command info")),

	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user"){

            kissLinks = [ 'https://media1.tenor.com/images/34ecc943dd11f0c55689e25f1bacddfb/tenor.gif?itemid=14816388',
            'https://i.pinimg.com/originals/5e/1e/8c/5e1e8c81c01a1e26db4c0e18ae8bafd5.gif',
            'https://media.tenor.com/images/4751eaa0b2d91140ab79c577809b566a/tenor.gif',
            'https://media.tenor.com/images/07b5bea3e050f380c6742500c1f1f7db/tenor.gif',
            'https://media.tenor.com/images/21fed1c94754d21acdbccd52adfb53d0/tenor.gif',
            'https://images-ext-1.discordapp.net/external/MTVSndEGkNUYyl4nUGhfD7pBYzhO1ycHZylGIE3XFoA/https/cdn.weeb.sh/images/rypMnpuvW.gif']
            
            const randomNum = Math.floor(Math.random() * Math.floor(kissLinks.length))

            const user = interaction.options.getUser("target")
            const member = interaction.options.getMember("target") || interaction.member
            let avatar = member.displayAvatarURL()
            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username} kissed ${user.username} !`)
                    .setDescription("kiss :o")
                    .setImage(kissLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Happy kissing :D");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} kissed , but who ??`)
                    .setDescription("Kiss :o")
                    .setImage(kissLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Happy kissing :D");

                await interaction.reply({ embeds: [userEmbed1]})
            }
        } else if (interaction.options.getSubcommand() === "info"){
            const kissinfo = new MessageEmbed()
                .setTitle("Kiss command")
                .setDescription("kiss command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\/kiss\`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\/kiss user @member\`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setImage("https://cdn.discordapp.com/attachments/912047994713550928/913480122785472602/unknown.png")
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");
               
            await interaction.reply({ embeds: [kissinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};
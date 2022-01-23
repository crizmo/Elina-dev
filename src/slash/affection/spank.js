const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spank')
		.setDescription('Spank command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("user")
            .setDescription("Spank a member")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get spank command info")),

	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user"){

            spankLinks = [ 'http://i.imgur.com/7ns8h8Q.gif',
                    'https://c.tenor.com/WN-vExb3SlgAAAAC/anime-schoolgirl.gif',
                    'https://24.media.tumblr.com/38094ad70dcf7722b7aceb6bbd82507f/tumblr_mqqu76NpRP1srsfpho1_400.gif',
                    'http://pa1.narvii.com/5792/c53f613f30bd0053e1eb561d336db90f2a02ec46_hq.gif' ]
            
            const randomNum = Math.floor(Math.random() * Math.floor(spankLinks.length))

            const user = interaction.options.getUser("target")
            const member = interaction.options.getMember("target") || interaction.member
            let avatar = member.displayAvatarURL()
            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username} spanked ${user.username} !`)
                    .setDescription("Damn :c")
                    .setImage(spankLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Why tho ?!");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} spanked , but who ??`)
                    .setDescription("Jeez :v")
                    .setImage(spankLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Imagine spanking noone ;D");

                await interaction.reply({ embeds: [userEmbed1]})
            }
        } else if (interaction.options.getSubcommand() === "info"){
            const spankinfo = new MessageEmbed()
                .setTitle("Spank command")
                .setDescription("Spank command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\/spank\`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\/spank user @member\`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setImage("https://media.discordapp.net/attachments/912047994713550928/913846215458816081/unknown.png?width=492&height=330")
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");
               
            await interaction.reply({ embeds: [spankinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};
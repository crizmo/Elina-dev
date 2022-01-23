const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill')
		.setDescription('Kill command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("user")
            .setDescription("kill a member")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get kill command info")),

	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user"){

            killLinks = [ 'https://thumbs.gfycat.com/ScrawnyCourteousAssassinbug-max-1mb.gif',
                'https://media.tenor.com/images/8ed0a4195855b6a7420feb9acb62bdc5/tenor.gif',
                'https://media.tenor.com/images/bdc0690ce19722e475ecd7479be44418/tenor.gif',
                'https://media1.tenor.com/images/717ab47f49d93f141900c20d0021f6c2/tenor.gif?itemid=14754968',
                'https://thumbs.gfycat.com/FickleForcefulBlobfish-max-1mb.gif',
                'https://media.tenor.com/images/5cdcbff8c5bce802d7b65baa711f12f4/tenor.gif',
                'http://37.media.tumblr.com/8aac647e8c1bae75b43d38991f3945df/tumblr_nah08lNX2V1sijhkdo1_500.gif' ]
            
            const randomNum = Math.floor(Math.random() * Math.floor(killLinks.length))

            const user = interaction.options.getUser("target")
            const member = interaction.options.getMember("target") || interaction.member
            let avatar = member.displayAvatarURL()
            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username} killed ${user.username} !`)
                    .setDescription("Killer :|")
                    .setImage(killLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Happy killing :D");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} killed , but who ??`)
                    .setDescription("killer :|")
                    .setImage(killLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Imagine :>");

                await interaction.reply({ embeds: [userEmbed1]})
            }
        } else if (interaction.options.getSubcommand() === "info"){
            const killinfo = new MessageEmbed()
                .setTitle("Kill command")
                .setDescription("Kill command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\/kill\`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\/kill user @member\`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setImage("https://media.discordapp.net/attachments/912047994713550928/913490551939154000/unknown.png?width=497&height=401")
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");
               
            await interaction.reply({ embeds: [killinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('slap')
		.setDescription('Slap command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("user")
            .setDescription("slap a member")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get slap command info")),

	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user"){

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
        } else if (interaction.options.getSubcommand() === "info"){
            const slapinfo = new MessageEmbed()
                .setTitle("Slap command")
                .setDescription("Slap command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\/slap\`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\/slap user @member\`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setImage("https://media.discordapp.net/attachments/912047994713550928/913712941331779604/unknown.png?width=490&height=403")
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");
               
            await interaction.reply({ embeds: [slapinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};
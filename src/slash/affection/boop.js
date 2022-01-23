const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boop')
		.setDescription('Boop command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("user")
            .setDescription("Boop a member")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get boop command info")),

	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user"){

            boopLinks = [ 'https://media.tenor.com/images/9945480efe5179c227558769613ee275/tenor.gif',
            'https://media1.tenor.com/images/cbf38a2e97a348a621207c967a77628a/tenor.gif?itemid=6287077',
            'http://i.imgur.com/fZmUTgw.gif',
            'https://66.media.tumblr.com/9a457a43bcae3ebaafda53d7fe6f572d/tumblr_pqjm6cCRt41th206io1_1280.gif',
            'https://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-9.gif',
            'https://media1.tenor.com/images/0da232de2ee45e1464bf1d5916869a39/tenor.gif?itemid=16935454' ]
            
            const randomNum = Math.floor(Math.random() * Math.floor(boopLinks.length))

            const user = interaction.options.getUser("target")
            const member = interaction.options.getMember("target") || interaction.member
            let avatar = member.displayAvatarURL()
            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`${interaction.user.username} booped ${user.username} !`)
                    .setDescription("Boop :o")
                    .setImage(boopLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Happy booping :D");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} booped , but who ??`)
                    .setDescription("Boop :o")
                    .setImage(boopLinks[randomNum])
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Happy booping :D");

                await interaction.reply({ embeds: [userEmbed1]})
            }
        } else if (interaction.options.getSubcommand() === "info"){
            const boopinfo = new MessageEmbed()
                .setTitle("Boop command")
                .setDescription("Boop command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\/boop\`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\/boop user @member\`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setImage("https://media.discordapp.net/attachments/912047994713550928/913418874551160902/unknown.png?width=494&height=398")
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");
               
            await interaction.reply({ embeds: [boopinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};
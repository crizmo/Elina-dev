const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('match')
		.setDescription('Match command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("user")
            .setDescription("Check how much match a user is")
            .addUserOption(option => option.setName("with").setDescription("The user mentioned")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get match command info")),

	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user"){

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
                        {name: "Matching !!", value: `${interaction.user.username} matched with ${user.username} by ` + rng + " %", inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `\u200B`, value: `${rngLevel}`, inline: true},
                    )
                    .setTimestamp()
                    .setColor("RED")
                    .setFooter("Good match ?!");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} is matching with themself ??`)
                    .addFields(
                        {name: `\u200B`, value: "Damn bro , u lonely ?", inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                    )
                    .setTimestamp()
                    .setColor("RED")
                    .setThumbnail(avatar)
                    .setFooter(":< Heres a hug from me 🤗");

                await interaction.reply({ embeds: [userEmbed1]})
            }
        } else if (interaction.options.getSubcommand() === "info"){
            const matchinfo = new MessageEmbed()
                .setTitle("Match command")
                .setDescription("Match command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\/match\`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\/match user @member\`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setImage("https://media.discordapp.net/attachments/912047994713550928/914062540076634143/unknown.png?width=342&height=221s")
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");
               
            await interaction.reply({ embeds: [matchinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('horny')
		.setDescription('Horny command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("user")
            .setDescription("Check how much horny a user is")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get horny command info")),

	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user"){
            
            let rng = Math.floor(Math.random() * 101);
            const rngIndex = Math.floor(rng / 10);
            const rngLevel = "😏".repeat(rngIndex) + "🤖".repeat(10 - rngIndex);

            const user = interaction.options.getUser("target")
            const member = interaction.options.getMember("target") || interaction.member
            let avatar = member.displayAvatarURL()
            if (user){
                const userEmbed = new MessageEmbed()
                    .setTitle(`${user.username} is horny!`)
                    .addFields(
                        {name: `\u200B`, value: `${user.username} is ` + "🤭" + rng + " % Horny", inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `\u200B`, value: `${rngLevel}`, inline: true},
                    )
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setThumbnail(avatar)
                    .setFooter("Why horni :o");

                await interaction.reply({ embeds: [userEmbed]})
            } else {
                const userEmbed1 = new MessageEmbed()
                    .setTitle(`${interaction.user.username} is horny`)
                    .addFields(
                        {name: `\u200B`, value: `${interaction.user.username} is ` + "🤭" + rng + " % Horny", inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `\u200B`, value: `${rngLevel}`, inline: true},
                    )
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setThumbnail(avatar)
                    .setFooter("why horny :?");

                await interaction.reply({ embeds: [userEmbed1]})
            }
        } else if (interaction.options.getSubcommand() === "info"){
            const hornyinfo = new MessageEmbed()
                .setTitle("Horny command")
                .setDescription("horny command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\/horny\`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\/horny @member\`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setImage("https://media.discordapp.net/attachments/912047994713550928/914055738740068392/unknown.png?width=386&height=230")
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");
               
            await interaction.reply({ embeds: [hornyinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};
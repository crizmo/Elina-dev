const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const { MessageButton } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bugreport')
		.setDescription('Bug report command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("bug")
            .setDescription("Bug information")
            .addStringOption(option => option.setName("bug").setDescription("Bug description")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get bugreport command info")),

	async execute(interaction, client) {

        const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

        const query = interaction.options.getString('bug');

        const channel = client.channels.cache.get('912028584384798810')

		if (interaction.options.getSubcommand() === "bug"){
            if (query){

                const embed = new MessageEmbed()
                .setTitle('New Bug!')
                .addField('Author',`${interaction.user.username}`, true)
                .addField('Guild', interaction.guild.name, true)
                .addField('Report', query)
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()

                let msgEmbed = await channel.send({embeds: [embed]});
                await msgEmbed.react('👍')
                interaction.reply("**Bug report has been sent!**")

            } else {
                interaction.reply("Please specify the bug")
            }
        } else if (interaction.options.getSubcommand() === "info"){
            const covidinfo = new MessageEmbed()
                .setTitle("Bug report command")
                .setDescription("Bugreport command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\ /bugreport \`", inline: true},
                    {name: `Usage`, value: "`\ /bugreport {bug}\`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setImage("https://media.discordapp.net/attachments/912047994713550928/914564151764975656/unknown.png?width=452&height=225")
                .setTimestamp()
                .setColor("RANDOM")
               
            await interaction.reply({ embeds: [covidinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const { MessageButton } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggest')
		.setDescription('Suggest command usage and information!')
        .addSubcommand(subcommand => subcommand
            .setName("channel")
            .setDescription("Suggestion channel")
            .addChannelOption(option => option.setName('channel').setDescription('Select a channel')))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get suggest command info")),

	async execute(interaction, client) {

        const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

        const channel = interaction.options.getChannel('channel');
        const query = interaction.options.getString('details');

        if(interaction.options.getSubcommand() === "channel"){
            const query = interaction.options.getString('details');
            interaction.reply("hi")
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
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const { MessageButton } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('covid')
		.setDescription('Covid command usage and information!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("country")
            .setDescription("Covid information")
            .addStringOption(option => option.setName("country").setDescription("Country name for covid stats")))

        .addSubcommand(subcommand => 
            subcommand
            .setName("info")
            .setDescription("Get covid command info")),

	async execute(interaction, client) {

        const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

        const country = interaction.options.getString('country');

		if (interaction.options.getSubcommand() === "country"){
            if (country){
                fetch(`https://covid19.mathdro.id/api/countries/${country}`)
                .then(response => response.json())
                .then(data => {
                      
                    let confirmed = data.confirmed.value.toLocaleString()
                    let recovered = data.recovered.value.toLocaleString()
                    let deaths = data.deaths.value.toLocaleString()

                    const embed = new MessageEmbed()
                    .setTitle(`COVID-19 Stats for **${country}**`)
                    .addFields(
                        {name: `Country:`, value: `${country}`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `\u200B`, value: `\u200B`, inline: true},
                        {name: `Confirmed Cases:`, value: `${confirmed}`, inline: true},
                        {name: `Recovered Cases`, value: `${recovered}`, inline: true},
                        {name: `Deaths`, value: `${deaths}`, inline: true},
                    )
                    .setColor("BLACK")
                    .setFooter("For more commands do /help")
                    .setTimestamp()
                    .setThumbnail("https://i.pinimg.com/originals/ba/fd/a2/bafda20f30a1ecf12d72c4b4366f0bbf.png")
                    interaction.reply({ embeds: [embed]})

                }).catch(e => {
                    interaction.reply("Invalid country provide")
                })
            } else {
                fetch(`https://covid19.mathdro.id/api`)
                .then(response => response.json())
                .then(data => {
                      
                    let confirmed = data.confirmed.value.toLocaleString()
                    let recovered = data.recovered.value.toLocaleString()
                    let deaths = data.deaths.value.toLocaleString()
    
                    
                    const embed = new MessageEmbed()
                    .setTitle(`Worldwide COVID-19 Stats 🌎`)
                    .addField('Confirmed Cases', confirmed)
                    .addField('Recovered', recovered)
                    .addField('Deaths', deaths)
                    .setColor("BLACK")
                    .setFooter("For more commands do /help")
                    .setTimestamp()
                    .setThumbnail("https://i.pinimg.com/originals/ba/fd/a2/bafda20f30a1ecf12d72c4b4366f0bbf.png")

                    interaction.reply({embeds: [embed]})
                })
            }
        } else if (interaction.options.getSubcommand() === "info"){
            const covidinfo = new MessageEmbed()
                .setTitle("Covid command")
                .setDescription("Covid command usage and informaion")
                .addFields(
                    {name: `Usage`, value: "`\/covid\`", inline: true},
                    {name: `\u200B`, value: `\u200B`, inline: true},
                    {name: `Usage`, value: "`\/covid country {country_name}\`", inline: true},
                )
                .setAuthor(`${interaction.guild.name}`, client.user.displayAvatarURL())
                .setThumbnail(interaction.guild.iconURL())
                .setImage("https://media.discordapp.net/attachments/912047994713550928/914564151764975656/unknown.png?width=452&height=225")
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter("For info of all command do /help");
               
            await interaction.reply({ embeds: [covidinfo] })
        } else {
            await interaction.reply("No sub command was used");
        }
	},
};
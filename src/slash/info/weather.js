const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
const weather = require('weather-js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Weather command usage and information!')
        .addStringOption(option => option.setName('name').setDescription('Country name').setRequired(true)),
        
	async execute(interaction, client, Discord) {

        const query = interaction.options.getString('name');

        weather.find({search: query, degreeType: 'C'},async function (error, result){

            if(error) return interaction.reply(error);

            if(!query) {
                return await interaction.reply('Please specify a location')
            }
    
                if(result === undefined || result.length === 0){
                    return await interaction.reply('**Invalid** location')
                }
    
            const current = result[0].current;
            const location = result[0].location;
    
            const weatherinfo = new MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather forecast for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor("RANDOM")
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', 'Celsius', true)
            .addField('Temperature', `${current.temperature}°`, true)
            .addField('Wind', current.winddisplay, true)
            .addField('Feels like', `${current.feelslike}°`, true)
            .addField('Humidity', `${current.humidity}%`, true)

            await interaction.reply({embeds: [weatherinfo]})
            })     
	},  
};
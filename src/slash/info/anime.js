const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
const Kitsu = require("kitsu.js");
const kitsu = new Kitsu();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anime')
		.setDescription('Anime command usage and information!')
        .addStringOption(option => option.setName('name').setDescription('Anime name').setRequired(true)),
        
	async execute(interaction, client) {

        const search = interaction.options.getString('name');

        kitsu.searchAnime(search).then(async result => {
            const anime = result[0];
            
            if (result.length === 0){
                await interaction.reply(`**${interaction.user.username}**, there is no result called **${search}**.`)
            }
            else {
                const info = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`**${anime.titles.romaji ? anime.titles.romaji : "Unknown"}**`)
                .setURL(anime.url)
                .setDescription(`**Synopsis:**\n> ${anime.synopsis.replace(/<[^>]*>/g, "").split("\n")[0]}`)
                .setThumbnail(anime.posterImage.original)
                .addField("**Japanese:**", `${anime.titles.japanese ? anime.titles.japanese : "Unknown"}`, true)
                .addField("**English:**", `${anime.titles.english ? anime.titles.english : "Unknown"}`, true)
                .addField("**Rating:**", `${anime.averageRating ? anime.averageRating : "Unknown"}`, true)
                .addField("**Start Date:**", `${anime.startDate ? anime.startDate : "Unknown"}`, true)
                .addField("**End Date:**", `${anime.endDate ? anime.endDate : "Unknown"}`, true)
                .addField("**Type:**", `${anime.showType ? anime.showType : "Unknown"}`, true)
                .addField("**Episodes:**", `${anime.episodeCount ? anime.episodeCount : "Unknown"}`, true)
                .addField("**Duration:**", `${anime.episodeLength ? anime.episodeLength : "??"} minutes`, true)
                .addField("**Rank:**", `${anime.ratingRank ? anime.ratingRank : "Unknwon"}`, true)
                .setTimestamp(new Date)
                .setFooter(interaction.user.username, interaction.user.displayAvatarURL({ format: "png", dynamic: true, size: 64 }));
                await interaction.reply({embeds: [info]});
            }
          })
	},  
};
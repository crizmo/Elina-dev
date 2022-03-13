const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
const anyanime = require("anyanime");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('animepfp')
        .setDescription('Get random anime image / pfp'),

    async execute(interaction, client) {

        const anime = anyanime.anime();
        // interaction.reply(anime);       // Returns a random anime image

        const embed = new MessageEmbed().setImage(anime);      // Returns a random anime image but inside an embed
        await interaction.reply({ embeds: [embed] });
    },
};
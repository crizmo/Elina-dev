const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
        data: new SlashCommandBuilder()
                .setName('dice')
                .setDescription('Dice(roll) command usage and information!'),

        async execute(interaction, client) {

                const roll1 = ["1", "2", "3", "4", "5", "6"];
                const die = roll1[Math.floor(Math.random() * roll1.length)];

                const embed = new MessageEmbed()
                        .setTitle('Roll')
                        .setDescription(` You rolled a dice and got ${die} `)
                        .setTimestamp()
                await interaction.reply({ embeds: [embed] });
        },
};
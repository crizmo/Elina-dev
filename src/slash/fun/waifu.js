const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('waifu')
		.setDescription('To get a random waifu'),

	async execute(interaction, client) {

        const waifu = await fetch("https://api.waifu.pics/sfw/waifu").then(res => res.json());

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${interaction.user.username} got a waifu!`)
            .setImage(waifu.url)
            .setFooter(`Hope you like it!`)
        interaction.channel.send({embeds: [embed]});
    
	},
};
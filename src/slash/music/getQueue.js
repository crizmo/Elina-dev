const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('queue')
		.setDescription('Shows the queue'),
	async execute(interaction, client) {

        const isConnected = await music.isConnected({
            interaction: interaction
        });
        if(!isConnected) return interaction.reply({ content: 'There are no songs playing', ephemeral: true });

        const queue = await music.getQueue({
            interaction: interaction
        });

        let response = ``;

        for (let i = 0; i < queue.length; i++) {
            response += `${i + 1}. [${queue[i].info.title}](${queue[i].info.url}) - ${queue[i].info.duration}\n`
        };

        // const queueEmbed = new MessageEmbed()
        // let response = ``;
        // for (let i = 0; i < queue.length; i++) {
        //     response += `${i + 1}. [${queue[i].info.title}](${queue[i].info.url}) - ${queue[i].info.duration}\n`
        // };
        // interaction.reply({ embeds: [queueEmbed]})

        interaction.reply({ content: response });

	},
};
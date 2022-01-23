const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const music = require('@koenie06/discord.js-music');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Plays a song in the voice channel')
        .addStringOption(string => 
            string
            .setName("song")
            .setDescription("Play a given song name/URL in the voice channel")
            .setRequired(true)),

	async execute(interaction, client) {

        const song = interaction.options.getString('song');

        const voiceChannel = interaction.member.voice.channel;
        if(!voiceChannel) return interaction.reply({ content: 'You need to be in a voice channel!', ephemeral: true });
        await interaction.reply('Song added', true)

        music.play({
            interaction: interaction,
            channel: voiceChannel,
            song: song
        });

	},
};
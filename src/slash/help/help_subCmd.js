const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
let color = "#00ccff";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('subhelp')
		.setDescription('Replies with Pong!'),
	async execute(interaction, client) {

		const user = interaction.user
        let avatar = user.displayAvatarURL()

		const row = new MessageActionRow().addComponents(
				new MessageSelectMenu()
					.setCustomId('aff')
					.setPlaceholder('Affection commands')
					.addOptions([
						{
							label: 'Affection commands',
							description: 'To get more info',
							value: 'first_option',
						},
					]),
				new MessageSelectMenu()
					.setCustomId('bot')
					.setPlaceholder('Bot commands')
					.addOptions([
						{
							label: 'Bot commands',
							description: 'To get more info',
							value: 'second_option',
						},
					]),
			)
			
			const affection = new MessageEmbed()
			.setTitle("Affection commands!")
			.setDescription("To get info of commands `\ help-affection \`")
			.setAuthor(`${interaction.user.username}`, avatar)
			.addFields(
			  {name: `\u200B`, value: "`\ boop \` , `\ dance \` , `\ horny \` , `\ howgay \` , `\ hug \` \n `\ kill \` , `\ kiss \` , `\ match \` , `\ pet \` , `\ simp \` , `\ slap \` \n `\ spank \` , `\ yaoi \`", inline: true},
			)
			.setFooter(client.user.tag , client.user.displayAvatarURL())
			.setTimestamp()
			.setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
			.setThumbnail(avatar)
			.setColor(color);

			const bot = new MessageEmbed()
			.setTitle("Bot commands commands!")
			.setDescription("To get info of commands `\ help-bot \`")
			.setAuthor(`${interaction.user.username}`, avatar)
			.addFields(
			  {name: `\u200B`, value: "`\ invite \` , `\ ping \` , `\ stats \` , `\ suggest \` \n `\ bugreport \`", inline: true},
			)
			.setFooter(client.user.tag , client.user.displayAvatarURL())
			.setTimestamp()
			.setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
			.setThumbnail(avatar)
			.setColor(color);
		
			await interaction.reply({ content: 'Sub help for all commands!', components: [row] });

			const filter = interaction => interaction.customId === 'aff' && interaction.user.id === interaction.member.user.id;

				const collectorAff = interaction.channel.createMessageComponentCollector({ filter, time: 50000 });
				
				collectorAff.on('collect', async interaction => {
					if (interaction.customId === 'aff') {
						await interaction.deferUpdate();
						await interaction.editReply({ embeds: [affection], components: [row] });
					}
				});

			const filter2 = interaction => interaction.customId === 'bot' && interaction.user.id === interaction.user.username.id;

				const collectorBot = interaction.channel.createMessageComponentCollector({ filter2, time: 50000 });
				
				collectorBot.on('collect', async interaction => {
					if (interaction.customId === 'bot') {
						await interaction.deferUpdate();
						await interaction.editReply({ embeds: [bot], components: [row] });
					}
				});
	},
};
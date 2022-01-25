const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('credits')
		.setDescription('Elina bot credits'),
	async execute(interaction, client) {

	const credits = new MessageEmbed()
    .setColor('#FFDBE9')
    .setTitle('Elina Bot Credits')
    .setURL('https://dsc.gg/elina')
    .setDescription('Thank you for helping c:')
    .addFields(
        {name: '**Charls#3047**', value: "`Graphic Helper` , Helped with elina's pfp and servers banner , helped with inbuild features of the bot"},
        {name: 'Women Hater 69#1825', value: "Gave a lot of ideas for the bot , (Bug hunter)"},
        {name: 'loafy#2580', value: "Helped through reporting command bugs"},
    )
    .setThumbnail("https://images-ext-1.discordapp.net/external/xI8qpaUqhLswLVhFkX334qg-x766Uti_uBQJP7FY0As/%3Fsize%3D256/https/cdn.discordapp.com/avatars/842397001954230303/557d99168d42b845750241d8d7cd0f5b.png")
    .setImage('https://media.discordapp.net/attachments/862619247897477121/862925351851130900/image0.jpg?width=1200&height=393')
    .setFooter('Ty for reading , Hope you are enjoying the bot c:');
    
	await interaction.reply({embeds: [credits]});
	},
};
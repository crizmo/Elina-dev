const { MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord.js');
const { Discord } = require('discord.js');
const { version } = require('discord.js');

module.exports = {
    name: "invite",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "invite command", 
    async execute(client, message, args, Discord) {
        
    const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

        const row = new MessageActionRow().addComponents(
				new MessageButton()
                    .setURL('https://discord.com/oauth2/authorize?client_id=842397001954230303&permissions=126054&scope=bot')
                    .setLabel('Invite')
                    .setStyle('LINK'),
				new MessageButton()
					.setURL('https://discord.gg/Ecy6WpEZsD')
					.setLabel('Support Server')
					.setStyle('LINK'),
                new MessageButton()
					.setURL('https://crizmo.github.io/elina/')
					.setLabel("Elina's Website")
					.setStyle('LINK')
					);

        const embed = new MessageEmbed()
		.setTitle("Elina Bot")
		.setDescription("Hi~ I am Elina! Nice to meet you. I have many fun commands which can bring a new twist to your server , I am new on Discord but i am sure you will enjoy my presence <3 . Hope you have a great day~ " )
		.setThumbnail("https://images-ext-1.discordapp.net/external/xI8qpaUqhLswLVhFkX334qg-x766Uti_uBQJP7FY0As/%3Fsize%3D256/https/cdn.discordapp.com/avatars/842397001954230303/557d99168d42b845750241d8d7cd0f5b.png")
		.setImage("https://media.discordapp.net/attachments/912537423160942593/931157260049211443/IMG_8072.png?width=1440&height=540")
        .setColor("#FFDBE9");

        await message.reply({ embeds: [embed], components: [row] });
}
}
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed , MessageAttachment, MessageActionRow,  MessageButton } = require('discord.js');
const { version } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stats')
		.setDescription('Get taiga bot stats'),
	async execute(interaction, client) {

        let days = 0;
        let week = 0;
        let uptime = ``
        let totalSeconds = (client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
  
        if (hours > 23) {
          days = days + 1;
          hours = 0;
        }
  
        if (days == 7) {
          days = 0;
          week = week + 1;
        }
  
        if (week > 0) {
          uptime += `${week} week, `;
        }
  
        if (minutes > 60) {
          minutes = 0;
        }
  
        uptime += `${days}d, ${hours}h, ${minutes}m, ${seconds}s`

        const stats = new MessageEmbed()

        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setColor('BLACK')
        .setThumbnail(client.user.displayAvatarURL())
        .addField("\`   General   \`", `Name: \t\`${client.user.username}\`\nDiscriminator: \`${client.user.discriminator}\`\nPrefix: \t\`Slash Cmd\`\nUptime: \t\`${uptime}\``)
        .addField('\`   Statistics   \`', `Guilds: \t\`${client.guilds.cache.size}\`\nUsers: \t\`${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}\`\nChannels: \`${client.channels.cache.size}\`\nDiscord.JS version: \`${version}\``)
        .setFooter(client.user.username, client.user.displayAvatarURL())

        const row = new MessageActionRow().addComponents(
          new MessageButton()
              .setURL(`https://top.gg/bot/842397001954230303`)
              .setLabel('Top.gg')
              .setStyle('LINK'),
          new MessageButton()
                .setURL('https://crizmo.github.io/elina/')
                .setLabel("Elina's Website")
                .setStyle('LINK'),
              );

        await interaction.reply({embeds: [stats], components: [row]});
	},
};
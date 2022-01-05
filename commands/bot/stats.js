const { MessageEmbed } = require('discord.js');
const { Discord } = require('discord.js');
const { version } = require('discord.js');

module.exports = {
    name: "stats",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "Statistics on the bot!", 
    execute(client, message, args, Discord) {
    
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
      const clientembed = new MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setColor('RANDOM')
        .setThumbnail(client.user.displayAvatarURL())
        .addField("\`   General   \`", `Name: \t\`${client.user.username}\`\nDiscriminator: \`${client.user.discriminator}\`\nPrefix: \t\`=\`\nUptime: \t\`${uptime}\``)
        .addField('\`   Statistics   \`', `Guilds: \t\`${client.guilds.cache.size}\`\nUsers: \t\`${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}\`\nChannels: \`${client.channels.cache.size}\`\nDiscord.JS version: \`${version}\``)
        .setFooter(client.user.username, client.user.displayAvatarURL())
      message.channel.send({ embeds: [clientembed] });
    
}}
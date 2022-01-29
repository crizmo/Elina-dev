const { MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");
const { MessageActionRow, MessageButton } = require('discord.js');
let color = "#00ccff";

module.exports = {
    name: "help-bot",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Help command for all bot commands",

    async execute(client, message, args, Discord){

        const user = message.mentions.users.first() || message.member.user
        let avatar = user.displayAvatarURL()
        
        const embed = new MessageEmbed()
        .setTitle("Bot commands & usage !")
        .setURL('https://crizmo.github.io/elina/')
        .setDescription("To get info of commands `\ click \` on the respective buttons")
        .setAuthor(`${user.username}`, avatar)
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(avatar)
        .setColor(color);

        const statsEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Stats help command `, user.displayAvatarURL())
        .setTitle('Stats command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ stats \`"},
            {name: 'Usage: ', value: "`\ =stats \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const inviteEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Invite help command `, user.displayAvatarURL())
        .setTitle('Invite command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ invite \`"},
            {name: 'Usage: ', value: "`\ =invite \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const suggestEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Suggest help command `, user.displayAvatarURL())
        .setTitle('Suggest command & usage')
        .setDescription("To drop a suggestion")
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ suggest \` || `\ suggestions \`"},
            {name: 'Usage: ', value: "`\ =suggest {channel_name} {suggestion} \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const bugEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Bug report help command `, user.displayAvatarURL())
        .setTitle('Bug report command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ bugreport || bug || reportbug \`"},
            {name: 'Usage: ', value: "`\ =bug {bug} \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('bot')
                .setLabel('Help')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('stats')
                .setLabel('Stats')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('invite')
                .setLabel('Invite')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('suggest')
                .setLabel('Suggest')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('bug')
                .setLabel('Bug-report')
                .setStyle('SECONDARY'),
            );

        const sentMessage = await message.channel.send({embeds: [embed], components: [row]})

        const filter1 = i => i.customId === 'bot' && i.user.id === message.member.user.id;

          const collectorHelp = message.channel.createMessageComponentCollector({ filter1, time: 50000 });
          
          collectorHelp.on('collect', async i => {
            if (i.customId === 'bot') {
              await i.deferUpdate()
              await sentMessage.edit({ embeds: [embed], components: [row] });
            }
          });

        const filter2 = i => i.customId === 'stats' && i.user.id === message.member.user.id;

          const collectorStats = message.channel.createMessageComponentCollector({ filter2, time: 50000 });
          
          collectorStats.on('collect', async i => {
            if (i.customId === 'stats') {
              await i.deferUpdate()
              await sentMessage.edit({ embeds: [statsEmbed], components: [row] });
            }
          });

        const filter3 = i => i.customId === 'invite' && i.user.id === message.member.user.id;

          const collectorInvite = message.channel.createMessageComponentCollector({ filter3, time: 50000 });
          
          collectorInvite.on('collect', async i => {
            if (i.customId === 'invite') {
              await i.deferUpdate()
              await sentMessage.edit({ embeds: [inviteEmbed], components: [row] });
            }
          });

        const filter4 = i => i.customId === 'suggest' && i.user.id === message.member.user.id;

          const collectorSuggest = message.channel.createMessageComponentCollector({ filter4, time: 50000 });
          
          collectorSuggest.on('collect', async i => {
            if (i.customId === 'suggest') {
              await i.deferUpdate()
              await sentMessage.edit({ embeds: [suggestEmbed], components: [row] });
            }
          });

        const filter5 = i => i.customId === 'bug' && i.user.id === message.member.user.id;

          const collectorBug = message.channel.createMessageComponentCollector({ filter5, time: 50000 });
          
          collectorBug.on('collect', async i => {
            if (i.customId === 'bug') {
              await i.deferUpdate()
              await sentMessage.edit({ embeds: [bugEmbed], components: [row] });
            }
          });
}
}
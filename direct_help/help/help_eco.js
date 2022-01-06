const { MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");
const { MessageActionRow, MessageButton } = require('discord.js');
let color = "#00ccff";

module.exports = {
    name: "help-eco",
    aliases: ["help-economy"],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Help command for all bot commands",

    execute(client, message, args, Discord){

        const user = message.mentions.users.first() || message.member.user
        let avatar = user.displayAvatarURL()
        
        const embed = new MessageEmbed()
        .setTitle("Economy commands & usage !")
        .setURL('https://crizmo.github.io/elina/')
        .setDescription("To get info of commands `\ click \` on the respective buttons")
        .setAuthor(`${user.username}`, avatar)
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(avatar)
        .setColor(color);

        const earningsEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Earnings commands `, user.displayAvatarURL())
        .setTitle('Earning command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: `\ work \`', value: " > =work ", inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true },
            { name: `\u200B`, value: `\u200B`, inline: true },
            {name: 'Aliases: `\ rob \`', value: "> =rob @mention", inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true },
            { name: `\u200B`, value: `\u200B`, inline: true },
            {name: 'Aliases: `\ beg \`', value: "> =beg ", inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true },
            { name: `\u200B`, value: `\u200B`, inline: true },
            {name: 'Aliases: `\ daily \`', value: "> =daily ", inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true },
            { name: `\u200B`, value: `\u200B`, inline: true },
            {name: 'Aliases: `\ weekly \`', value: "> =weekly ", inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true },
            { name: `\u200B`, value: `\u200B`, inline: true },
            {name: 'Aliases: `\ monthly \`', value: "> =monthly ", inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true },
            { name: `\u200B`, value: `\u200B`, inline: true },
            {name: 'Aliases: `\ slotseco {careful} \`', value: "> =slotseco  ", inline: true},
            { name: `\u200B`, value: `\u200B`, inline: true },
            { name: `\u200B`, value: `\u200B`, inline: true },
            {name: 'Aliases: `\ gamble \`', value: "> =gamble {amount} ", inline: true},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('eco')
                .setLabel('Help')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('earning')
                .setLabel('Earnings')
                .setStyle('SECONDARY')
            );

        message.channel.send({embeds: [embed], components: [row]})

        const filter1 = i => i.customId === 'eco' && i.user.id === message.member.user.id;

          const collectorHelp = message.channel.createMessageComponentCollector({ filter1, time: 50000 });
          
          collectorHelp.on('collect', async i => {
            if (i.customId === 'eco') {
              await i.deferUpdate()
              await i.editReply({ embeds: [embed], components: [row] });
            }
          });

        const filter2 = i => i.customId === 'earning' && i.user.id === message.member.user.id;

          const collectorEar = message.channel.createMessageComponentCollector({ filter2, time: 50000 });
          
          collectorEar.on('collect', async i => {
            if (i.customId === 'earning') {
              await i.deferUpdate()
              await i.editReply({ embeds: [earningsEmbed], components: [row] });
            }
          });
}
}
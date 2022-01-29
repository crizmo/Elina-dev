const { MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");
const { MessageActionRow, MessageButton } = require('discord.js');
let color = "#00ccff";

module.exports = {
    name: "help-mod",
    aliases: ["help-moderation"],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Help command for all moderation commands",

    async execute(client, message, args, Discord){

        const user = message.mentions.users.first() || message.member.user
        let avatar = user.displayAvatarURL()
        
        const embed = new MessageEmbed()
        .setTitle("Moderation commands & usage !")
        .setURL('https://crizmo.github.io/elina/')
        .setDescription("To get info of commands `\ click \` on the respective buttons")
        .setAuthor(`${user.username}`, avatar)
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(avatar)
        .setColor(color);

        const banEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Ban help command `, user.displayAvatarURL())
        .setTitle('Ban command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ ban \`"},
            {name: 'Usage: ', value: "`\ =ban @mention \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const kickEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Kick help command `, user.displayAvatarURL())
        .setTitle('Kick command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ kick \`"},
            {name: 'Usage: ', value: "`\ =kick @mention \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const clearEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Clear help command `, user.displayAvatarURL())
        .setTitle('Clear command & usage')
        .setDescription("It's like a purge command you know")
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ clear \`"},
            {name: 'Usage: ', value: "`\ =clear {number_of_messages} \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const rolesEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Roles help command `, user.displayAvatarURL())
        .setTitle('Roles command & usage')
        .setDescription("To check roles of a user")
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ clear \`"},
            {name: 'Usage: ', value: "`\ =clear {number_of_messages} \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('mod')
                .setLabel('Help')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('ban')
                .setLabel('Ban')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('kick')
                .setLabel('Kick')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('clear')
                .setLabel('Clear')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('roles')
                .setLabel('Roles')
                .setStyle('SECONDARY'),
            );

        const sentMessage = await message.channel.send({embeds: [embed], components: [row]})

        const filter1 = i => i.customId === 'mod' && i.user.id === message.member.user.id;

          const collectorHelp = message.channel.createMessageComponentCollector({ filter1, time: 50000 });
          
          collectorHelp.on('collect', async i => {
            if (i.customId === 'mod') {
              await i.deferUpdate()
              await sentMessage.edit({ embeds: [embed], components: [row] });
            }
          });

        const filter2 = i => i.customId === 'ban' && i.user.id === message.member.user.id;

          const collectorBan = message.channel.createMessageComponentCollector({ filter2, time: 50000 });
          
          collectorBan.on('collect', async i => {
            if (i.customId === 'ban') {
              await i.deferUpdate()
              await sentMessage.edit({ embeds: [banEmbed], components: [row] });
            }
          });

        const filter3 = i => i.customId === 'kick' && i.user.id === message.member.user.id;

          const collectorKick = message.channel.createMessageComponentCollector({ filter3, time: 50000 });
          
          collectorKick.on('collect', async i => {
            if (i.customId === 'kick') {
              await i.deferUpdate()
              await sentMessage.edit({ embeds: [kickEmbed], components: [row] });
            }
          });

        const filter4 = i => i.customId === 'clear' && i.user.id === message.member.user.id;

          const collectorClear = message.channel.createMessageComponentCollector({ filter4, time: 50000 });
          
          collectorClear.on('collect', async i => {
            if (i.customId === 'clear') {
              await i.deferUpdate()
              await sentMessage.edit({ embeds: [clearEmbed], components: [row] });
            }
          });

        const filter5 = i => i.customId === 'roles' && i.user.id === message.member.user.id;

          const collectorRoles = message.channel.createMessageComponentCollector({ filter5, time: 50000 });
          
          collectorRoles.on('collect', async i => {
            if (i.customId === 'roles') {
              await i.deferUpdate()
              await sentMessage.edit({ embeds: [rolesEmbed], components: [row] });
            }
          });
}
}
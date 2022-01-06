const { MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");
const { MessageActionRow, MessageButton } = require('discord.js');
let color = "#00ccff";

module.exports = {
    name: "help-profile",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "Help command for all bot commands",

    execute(client, message, args, Discord){

        const user = message.mentions.users.first() || message.member.user
        let avatar = user.displayAvatarURL()
        
        const embed = new MessageEmbed()
        .setTitle("Profile commands & usage !")
        .setURL('https://crizmo.github.io/elina/')
        .setDescription("To get info of commands `\ click \` on the respective buttons")
        .setAuthor(`${user.username}`, avatar)
        .setFooter(client.user.tag , client.user.displayAvatarURL())
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/912537423160942593/912537520150020156/elina_info.jpg?width=1188&height=389")
        .setThumbnail(avatar)
        .setColor(color);

        const avatarEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Avatar help command `, user.displayAvatarURL())
        .setTitle('Avatar command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ avatar \`"},
            {name: 'Usage: ', value: "`\ =avatar @mention\` || `\ =av \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const deepfryEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Deepfry help command `, user.displayAvatarURL())
        .setTitle('Deepfry command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ deepfry \`"},
            {name: 'Usage: ', value: "`\ =deepfry @mention \` || `\ =deepfry \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const tweetEmbed = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setAuthor(`Tweet help command `, user.displayAvatarURL())
        .setTitle('Tweet command & usage')
        .setURL('https://crizmo.github.io/elina/')
        .addFields(
            {name: 'Aliases: ', value: "`\ tweet \`"},
            {name: 'Usage: ', value: "`\ =tweet elina is a boy! \`"},
        )
        .setThumbnail("https://media.discordapp.net/attachments/912047994713550928/926044429763096608/elina.jpg?width=700&height=700")

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('profile')
                .setLabel('Help')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('avatar')
                .setLabel('Avatar')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('deepfry')
                .setLabel('Deepfry')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('tweet')
                .setLabel('Tweet')
                .setStyle('SECONDARY'),
            );

        message.channel.send({embeds: [embed], components: [row]})

        const filter1 = i => i.customId === 'profile' && i.user.id === message.member.user.id;

          const collectorHelp = message.channel.createMessageComponentCollector({ filter1, time: 50000 });
          
          collectorHelp.on('collect', async i => {
            if (i.customId === 'profile') {
              await i.deferUpdate()
              await i.editReply({ embeds: [embed], components: [row] });
            }
          });

        const filter2 = i => i.customId === 'avatar' && i.user.id === message.member.user.id;

          const collectorAvatar = message.channel.createMessageComponentCollector({ filter2, time: 50000 });
          
          collectorAvatar.on('collect', async i => {
            if (i.customId === 'avatar') {
              await i.deferUpdate()
              await i.editReply({ embeds: [avatarEmbed], components: [row] });
            }
          });

        const filter3 = i => i.customId === 'deepfry' && i.user.id === message.member.user.id;

          const collectorDeepfry = message.channel.createMessageComponentCollector({ filter3, time: 50000 });
          
          collectorDeepfry.on('collect', async i => {
            if (i.customId === 'deepfry') {
              await i.deferUpdate()
              await i.editReply({ embeds: [deepfryEmbed], components: [row] });
            }
          });

        const filter4 = i => i.customId === 'tweet' && i.user.id === message.member.user.id;

          const collectorTweet = message.channel.createMessageComponentCollector({ filter4, time: 50000 });
          
          collectorTweet.on('collect', async i => {
            if (i.customId === 'tweet') {
              await i.deferUpdate()
              await i.editReply({ embeds: [tweetEmbed], components: [row] });
            }
          });
}
}
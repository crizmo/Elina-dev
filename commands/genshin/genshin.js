const fetch = require('node-fetch');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'genshin',
    aliases: ["gen"],
    permissions: ["SEND_MESSAGES"],
    description: "Embeds!",
    async execute(client, message, args, Discord){

        let description = "Genshin Impact is an open-world action RPG with “gacha” (we wll go over that later on) mechanics. It is developed and published by Chinese studio miHoYo. In it, players control a number of party members, each with different abilities, weapons, gear, and personalities. The combat plays out in real time, allowing players to utilize ranged, melee, and elemental attacks against a wide array of enemies across the game(s) open world and dungeons."
        let image = "https://thumbs.gfycat.com/AltruisticAggressiveAddax-size_restricted.gif"
        let thumb = "https://media.discordapp.net/attachments/928257362106654720/929376683956510790/artworks-w6XYmsnp5PGKGQtL-tDQZAQ-t500x500.png?width=495&height=495"

        const genEmbed = new MessageEmbed()
        .setTitle(`Genshin Impact`) 
        .setDescription(`${description}`)
        .setImage(`${image}`)
        .setThumbnail(`${thumb}`)
        .setTimestamp()

        const cmdEmbed = new MessageEmbed()
        .setTitle(`Genshin Impact - Commands`) 
        .setDescription("Genshin impact commands")
        .addFields(
          { name: `Artifacts`, value: "`\ =gen-arti {artifact_name} \` || `\ =genshin-artifact \`"},
          { name: `Characters`, value: "`\ =gen-char {character_name} \` || `\ =genshin-character \`"},
          { name: `Elements`, value: "`\ =gen-el {element_name} \` || `\ =genshin-elements \`"}, 
          { name: `Nations`, value: "`\ =gen-nat {nation_name} \` || `\ =genshin-nations \`"},
          { name: `Weapons`, value: "`\ =gen-wp {weapon_name} \` || `\ =genshin-weapons \`"},
        )
        .setThumbnail(`${thumb}`)
        .setTimestamp()

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('main')
                .setLabel('Genshin')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('cmd')
                .setLabel('Commands')
                .setStyle('SECONDARY'),
            );

        const sentMessage = await message.channel.send({ embeds: [genEmbed], components: [row] })

        const filter1 = i => i.customId === 'main' && i.user.id === message.member.user.id;

        const collectorGen = message.channel.createMessageComponentCollector({ filter1, time: 50000 });
        
        collectorGen.on('collect', async i => {
          if (i.customId === 'main') {
            await i.deferUpdate()
            await i.editReply({ embeds: [genEmbed], components: [row] });
          }
        });

        const filter2 = i => i.customId === 'cmd' && i.user.id === message.member.user.id;

        const collectorCmd = message.channel.createMessageComponentCollector({ filter2, time: 50000 });
        
        collectorCmd.on('collect', async i => {
          if (i.customId === 'cmd') {
            await i.deferUpdate()
            await i.editReply({ embeds: [cmdEmbed], components: [row] });
          }
        });
        setTimeout(function () {
          row.components[0].setDisabled(true);
          row.components[1].setDisabled(true);
          sentMessage.edit({ embeds: [genEmbed], components: [row] })
        }, 20000);
    }
}
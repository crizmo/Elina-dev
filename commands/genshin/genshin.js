const fetch = require('node-fetch');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'genshin',
    permissions: ["SEND_MESSAGES"],
    description: "Embeds!",
    execute(client, message, args, Discord){

        let description = "Genshin Impact is an open-world action RPG with “gacha” (we wll go over that later on) mechanics. It is developed and published by Chinese studio miHoYo. In it, players control a number of party members, each with different abilities, weapons, gear, and personalities. The combat plays out in real time, allowing players to utilize ranged, melee, and elemental attacks against a wide array of enemies across the game(s) open world and dungeons."
        let image = "https://thumbs.gfycat.com/AltruisticAggressiveAddax-size_restricted.gif"
        let thumb = "https://media.discordapp.net/attachments/928257362106654720/929376683956510790/artworks-w6XYmsnp5PGKGQtL-tDQZAQ-t500x500.png?width=495&height=495"

        const genEmbed = new MessageEmbed()
        .setTitle(`Genshin Impact`) 
        .setDescription(`${description}`)
        .setImage(`${image}`)
        .setThumbnail(`${thumb}`)
        .setTimestamp()

        message.channel.send({ embeds: [genEmbed] })
    }
}
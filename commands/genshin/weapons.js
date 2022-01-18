const fetch = require('node-fetch');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: "genshin-weapon",
    aliases: ["gen-wp", "gen-weapon", "genshin-wp"],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "Genshin info & stats command",
    async execute(client, message, args, Discord) {

        let name = args.join(' ');

        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('Incorrect Usage <:paimon:927534293515911178>')
        .setURL('https://crizmo.github.io/elina/')
        .setDescription('To use the command correctly do \n `\ =gen-wp {weapon_name} \`\nIf the weapon name has space then `\ =gen-wp aquila-favonia \`')
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1VIMxlog-aJsdR3Vk770oxvJx7baqzfS0vzp3Ujcr_KWMHj4gKc9Vh9jWojnp8WrwcU&usqp=CAU")
        .setImage("https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/c2904ed6cfa731edd18d8ffe285b6695.png")
        .setTimestamp();

        if (!name) return message.channel.send({ embeds: [errorEmbed]})

        let Wp_Data = []
        let D_weapon = await fetch(`https://api.genshin.dev/weapons/${name}/`)
        let I_weapon = `https://api.genshin.dev/weapons/${name}/icon.png`
        let data = await D_weapon.json();

        if(!data.name) return message.channel.send("Incorrect weapon name");

        Wp_Data.push({
            wpname : data.name.toLocaleString(),
            type : data.type.toLocaleString(),
            rarity : data.rarity.toLocaleString(),
            baseAttack : data.baseAttack.toLocaleString(),
            subStats : data.subStat.toLocaleString(),
            passiveName : data.passiveName.toLocaleString(),
            passiveDesc : data.passiveDesc.toLocaleString(),
            location : data.location.toLocaleString(),
            icon: I_weapon.toString(),
        })

        const wpEmbed = new MessageEmbed()
            .setTitle(`Genshin Impact - ${Wp_Data[0].wpname}`) 
            .setDescription("Genshin impact weapon info")
            .addFields(
                { name: `Type`, value: `${Wp_Data[0].type}`, inline: true},
                { name: `Rarity`, value: `${Wp_Data[0].rarity} ⭐`, inline: true},
                { name: `Base Atk`, value: `${Wp_Data[0].baseAttack}`, inline: true},
                { name: `Sub Stats`, value: `${Wp_Data[0].subStats}`, inline: true},
                { name: `Passive`, value: `${Wp_Data[0].passiveName}`, inline: true},
                { name: `Location`, value: `${Wp_Data[0].location}`, inline: true},
                { name: `Description`, value: `${Wp_Data[0].passiveDesc}`},
            )
            .setThumbnail(`${Wp_Data[0].icon}`)
            .setTimestamp()

        message.channel.send({ embeds: [wpEmbed] })
    }
}
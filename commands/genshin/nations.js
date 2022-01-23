const fetch = require('node-fetch');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: "genshin-nations",
    aliases: ["gen-nat", "gen-nations", "genshin-nat"],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "Genshin info & stats command",
    async execute(client, message, args, Discord) {

        let name = args[0]

        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('Incorrect Usage <:paimon:927534293515911178>')
        .setURL('https://crizmo.github.io/elina/')
        .setDescription('To use the command correctly do \n `\ =gen-nat {nation_name} \`')
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1VIMxlog-aJsdR3Vk770oxvJx7baqzfS0vzp3Ujcr_KWMHj4gKc9Vh9jWojnp8WrwcU&usqp=CAU")
        .setImage("https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/c2904ed6cfa731edd18d8ffe285b6695.png")
        .setTimestamp();

        if (!name) return message.channel.send({ embeds: [errorEmbed]})

        const rlname = name.toLowerCase()

        let Nat_Data = []
        let D_nation = await fetch(`https://api.genshin.dev/nations/${name}/`)
        let I_nation = `https://api.genshin.dev/nations/${rlname}/icon.png`
        let data = await D_nation.json();

        if(!data.name) return message.channel.send("Incorrect nation name");

        Nat_Data.push({
            natname : data.name.toLocaleString(),
            element : data.element.toLocaleString(),
            archon : data.archon.toLocaleString(),
            main : data.controllingEntity.toLocaleString(),
            icon: I_nation.toString(),
        })

        const natEmbed = new MessageEmbed()
            .setTitle(`Genshin Impact - ${Nat_Data[0].natname}`) 
            .setDescription("Genshin impact nation info")
            .addFields(
                { name: `Element`, value: `${Nat_Data[0].element}`, inline: true},
                { name: `Archon`, value: `${Nat_Data[0].archon}`, inline: true},
                { name: `Main`, value: `${Nat_Data[0].main}`, inline: true},
            )
            .setThumbnail(`${Nat_Data[0].icon}`)
            .setTimestamp()

        message.channel.send({ embeds: [natEmbed] })
    }
}
const fetch = require('node-fetch');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: "genshin-character",
    aliases: ["gen-char", "genshin-character", "gen-character", "genshin-char"],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "Genshin info & stats command",
    async execute(client, message, args, Discord) {

        let name = args[0]

        const errorEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('Incorrect Usage <:paimon:927534293515911178>')
        .setURL('https://crizmo.github.io/elina/')
        .setDescription('To use the command correctly do \n `\ =gen-char {character_name} \`')
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1VIMxlog-aJsdR3Vk770oxvJx7baqzfS0vzp3Ujcr_KWMHj4gKc9Vh9jWojnp8WrwcU&usqp=CAU")
        .setImage("https://mmos.com/wp-content/uploads/2021/04/genshin-impact-ps5-announce-key-art-banner.jpg")
        .setFooter('Enjoy !')
        .setTimestamp();

        if (!name) return message.channel.send({ embeds: [errorEmbed]})

            let Chars_Data = []
            let D_character = await fetch(`https://api.genshin.dev/characters/${name}/`)
            let I_character = `https://api.genshin.dev/characters/${name}/icon.png`
            let Pic_character = `https://api.genshin.dev/characters/${name}/gacha-splash.png`
            let data = await D_character.json();

            Chars_Data.push({
                charname : data.name.toLocaleString(),
                vision : data.vision.toLocaleString(),
                nation : data.nation.toLocaleString(),
                weapon : data.weapon.toLocaleString(),
                affiliation : data.affiliation.toLocaleString(),
                rarity : data.rarity.toLocaleString(),
                constellation : data.constellation.toLocaleString(),
                birthday : data.birthday.toLocaleString(),
                description : data.description.toLocaleString(),
                icon: I_character.toString(),
                pic: Pic_character.toLocaleString()
            });

            const charEmbed = new MessageEmbed()
                .setTitle(`Genshin Impact - ${Chars_Data[0].charname}`) 
                .setDescription(`${Chars_Data[0].description}`)
                .addFields(
                    { name: `Rarity`, value: `${Chars_Data[0].rarity} ⭐`, inline: true},
                    { name: `Vision`, value: `${Chars_Data[0].vision}`, inline: true},
                    { name: `Nation`, value: `${Chars_Data[0].nation}`, inline: true},
                    { name: `Constellation`, value: `${Chars_Data[0].constellation}`, inline: true},
                    { name: `Weapon`, value: `${Chars_Data[0].weapon}`, inline: true},
                    { name: `Affiliation`, value: `${Chars_Data[0].affiliation}`, inline: true},
                )
                .setImage(`${Chars_Data[0].pic}`)
                .setThumbnail(`${Chars_Data[0].icon}`)
                .setFooter(`Isn't ${Chars_Data[0].charname} just perfect !`)
                .setTimestamp()

            const row = new MessageActionRow().addComponents(
                new MessageButton()
                    .setCustomId('yeet')
                    .setLabel('Yeet')
                    .setStyle('SECONDARY'),
            );

            message.channel.send({ embeds: [charEmbed], components: [row] });
        }
    }
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

        fetch(`https://api.genshin.dev/characters/${name}`)
            .then(response => response.json())
            .then(data => {
                let charname = data.name.toLocaleString()
                let vision = data.vision.toLocaleString()
                let weapon = data.weapon.toLocaleString()
                let nation = data.nation.toLocaleString()
                let affiliation = data.affiliation.toLocaleString()
                let rarity = data.rarity.toLocaleString()
                let constellation = data.constellation.toLocaleString()
                let birthday = data.birthday.toLocaleString()
                let description = data.description.toLocaleString()

                const charEmbed = new MessageEmbed()
                    .setTitle(`Genshin Impact - ${charname}`)
                    .setDescription(`${description}`)
                    .addFields(
                        { name: `Username`, value: `${charname}` },
                        { name: `Vision`, value: `${vision}` },
                    )
                    // .setThumbnail()
                    .setFooter(`Isn't ${charname} just perfect !`)
                    .setTimestamp()

                const row = new MessageActionRow().addComponents(
                    new MessageButton()
                        .setURL(`https://github-readme-stats.vercel.app/api?username=${charname}&theme=radical&show_icons=true&hide_border=true.gif`)
                        .setLabel('Stats')
                        .setStyle('LINK'),
                );

                message.channel.send({ embeds: [charEmbed], components: [row] });
            }
            )
    }
}
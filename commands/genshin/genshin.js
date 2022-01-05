const { MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "genshin",
    aliases: ["gen"],
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "genshin command",
    async execute(client, message, args, Discord) {

        const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

        let name = args[0]

        const error = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('**❌ERROR INVALID ARGS**')
            .setDescription('`Invalid input | =github {github username}`')
            .setFooter('For more info of the command do =help-github')

        if (!name) return message.channel.send({ embeds: [error] })

        fetch(`https://api.genshin.dev/characters/${name}`)
            .then(response => response.json())
            .then(data => {
                
                let personname = data.name.toLocaleString()
                let vision = data.vision.toLocaleString()
                let weapon_type = data.weapon_type.toLocaleString()

                const userEmbed = new MessageEmbed()
                    .addFields(
                        { name: `Username`, value: `${personname}`, inline: true },
                        { name: `\u200B`, value: `\u200B`, inline: true },
                        { name: `Vision`, value: `${vision}`, inline: true },
                        { name: `Weapon_type`, value: `${weapon_type}`, inline: true },
                    )
                    .setFooter("For more commands do =help")
                    .setTimestamp()
                message.channel.send({ embeds: [userEmbed] });
            }
            )
    }
}
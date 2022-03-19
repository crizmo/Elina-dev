const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "ani",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "anyanime api",
    async execute(client, message, args, Discord) {

        let Anyanime = []
        let ani = await fetch(`https://anyanime-api.herokuapp.com/anime`)
        let data = await ani.json();

        Anyanime.push({
            message: data.message.toLocaleString(),
            status: data.status.toLocaleString(),

            // image

            name: data.stuff[0].name.toLocaleString(),
            daimg: data.stuff[0].image.toLocaleString()

        })

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(Anyanime[0].daimg)
            .setDescription(`${Anyanime[0].message}`)
            .setTitle(`${Anyanime[0].name}`)
            .setFooter(`Hope you like it!`)
        message.channel.send({ embeds: [embed] });
    }
}